import { Button, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Select, Stack, Option } from "@mui/joy";
import React, { useState } from "react";
import apiAgent from "../api/apiAgent";

interface CreateProductModalProps {
    modalOpen: boolean;
    closeModalFn: (arg1: any) => void;
    calledFrom?: 'add-button' | 'edit-button' | null
    productToEdit?: ProductToEdit | null
}

interface ProductToEdit {
    id: string;
    number: string;
    description: string;
    className: string;
    classId: number;
    weight: number;
    imageUrl?: string;
}


export default function CreateProductModal({ modalOpen, closeModalFn, calledFrom = 'add-button', productToEdit = null }: CreateProductModalProps) {



    const classes = [
        { classId: 1, className: 'cool stuff' },
        { classId: 2, className: 'lame shit' },
        { classId: 3, className: 'randomness' },
        { classId: 4, className: 'I dunno' },
    ]

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)



        switch (calledFrom) {
            case "edit-button":
                formData.append("id", productToEdit!.id)

                await apiAgent.Products.updateProduct(formData)
                break

            case "add-button":

                await apiAgent.Products.createProduct(formData)
                break

            default:
                alert("I don't know if you are trying to add or delete")
        }

        closeModalFn(!modalOpen)
    }


    return (
        <Modal open={modalOpen} onClose={() => closeModalFn(!modalOpen)}>
            <ModalDialog>
                <DialogTitle>CreateNew Product</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Product Number</FormLabel>
                            <Input name="number"
                                autoFocus
                                required
                                type="number"
                                slotProps={{ input: { min: 1000, max: 999999 } }}
                                defaultValue={productToEdit ? parseInt(productToEdit.number) : 0}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input name="description" defaultValue={productToEdit != null ? productToEdit.description : ''} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Weight</FormLabel>
                            <Input name="weight" required type="number"
                                defaultValue={productToEdit ? productToEdit.weight : ''}
                                slotProps={{
                                    input: {
                                        min: 0.1,
                                        max: 10000,
                                        step: 0.1
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Class</FormLabel>
                            <Select name="classId" required defaultValue={productToEdit?.classId}>
                                {classes.map((c) => (
                                    <Option key={c.classId} value={c.classId}>
                                        {c.className}
                                    </Option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>ImageUrl</FormLabel>
                            <Input type="url" name="imageUrl" />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    )
}