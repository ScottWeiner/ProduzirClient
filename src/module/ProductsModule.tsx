import Box from "@mui/joy/Box";
import AppBreadcrumbs from "../demoComonents/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Sheet, Table, Modal, ModalDialog, DialogTitle, FormControl, Input, FormLabel, Stack, Select, Option } from "@mui/joy";
import Checkbox from "@mui/joy/Checkbox";
import Button from '@mui/joy/Button';
import CreateProductModal from "../components/CreateProductModal";

interface Product {
    id: string;
    number: string;
    description: string;
    className: string;
    classId: number;
    weight: number;
    imageUrl?: string;
}



export default function ProductsModule() {

    /*TODO: Implement state management
            Goal: Enable Deleting product, editing product, creating new product

            Requirements:
         
            2) state management: Zustand or Redux... Zustand is probably the bettwe choice for being lighteight
                Homework What are your pieces of state, and what will you do with them?

            3) State needs to populate on mount, so use useEffect(). The products array is probably the dependcy to re-render

       TODO: Implement a Table component from MUI that has some functionality.     
    */

    const [productList, setProductList] = useState<Product[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedProducts, setSelectedProducts] = useState<number[]>([])
    const [modalCalledFrom, setModalCalledFrom] = useState<'add-button' | 'edit-button' | null>(null)
    const [productToEdit, setProductToEdit] = useState<Product>()


    useEffect(() => {

        if (productList.length === 0) {
            fetch('http://localhost:5227/api/products')
                .then(response => response.json())
                .then(data => setProductList(data))
                .catch(err => console.log(err.message))
        }

    }, [selectedProducts.length, setSelectedProducts])

    const handleCheckboxClick = (productId: number) => {
        console.log(selectedProducts.length)
        let newArray = selectedProducts
        if (newArray.indexOf(productId) >= 0) {
            newArray = newArray.filter(i => i !== productId)
            setSelectedProducts([...newArray])
        } else {
            newArray.push(productId)
            setSelectedProducts([...newArray])
        }


    }

    const handleAddOrEdit = (e: any) => {
        console.log(e.target.id)

        if (e.target.id === 'edit-button') {
            console.log(selectedProducts)
            let product = productList.filter((p) => parseInt(p.id) === selectedProducts[0])
            setProductToEdit(product[0])
            setModalCalledFrom(e.target.id)
        } else {
            setModalCalledFrom("add-button")
        }

        setModalOpen(true)


    }

    const handleDelete = async (productIds: number[]) => {
        let confirmDelete = false
        if (productIds.length > 0) {
            confirmDelete = confirm("Are you sure you want to delete these products?")
        }

        if (confirmDelete) {
            productIds.forEach((id) => {
                fetch(`http://localhost:5227/api/products/${id}`, { method: "DELETE" })
                    .then(reponse => console.log(reponse))
                    .catch(err => console.log(err))
            })
        }
    }

    return (
        <Sheet variant='soft' sx={{ height: '100%' }}>

            <AppBreadcrumbs moduleName={'Products'} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 >Products Module</h3>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button id="add-button" color='success' style={{ margin: 3 }} onClick={(e) => handleAddOrEdit(e)}>Add</Button>
                    <Button id="edit-button" color='primary' style={{ margin: 3 }} onClick={(e) => handleAddOrEdit(e)}
                        disabled={selectedProducts.length < 1}>Edit</Button>
                    <Button id="delete-button" color="danger" style={{ margin: 3 }} onClick={() => handleDelete(selectedProducts)}>Delete</Button>
                </div>
            </div>

            <CreateProductModal modalOpen={modalOpen} closeModalFn={setModalOpen} calledFrom={modalCalledFrom} productToEdit={productToEdit} />

            <Table variant="outlined" stripe='odd' hoverRow aria-label="Product List" size='md' >
                <thead>
                    <tr>
                        <th style={{ width: '20px' }}><Checkbox size='sm' /></th>
                        <th style={{ width: '100px' }}>Product Code</th>
                        <th style={{ width: '175px' }}>Description</th>
                        <th style={{ width: '150px' }}>Product Class</th>
                        <th style={{ width: '50px' }}>Weight</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    {productList?.map((prod) => (
                        <tr key={prod.id}>
                            <td><Checkbox value={prod.id} onChange={(e) => handleCheckboxClick(parseInt(e.target.value))} size='sm' /></td>
                            <td>{prod.number}</td>
                            <td>{prod.description}</td>
                            <td>{prod.className}</td>
                            <td>{prod.weight}</td>
                            <td>{prod.imageUrl ?? 'http://www.gofuckyourself.com'}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>

        </Sheet>
    )
}