import React, { Component } from "react"


export default function Header() {
    return (
        <header>
            <div className="logo">
                <img style={{ maxWidth: '100%', maxHeight: '100%', objectFit: "cover" }} src='/ProduzirLogo.jpg'></img>
            </div>
            <div className="title">Produzir</div>
            <div className="user-info">
                <div className="user-name">John Doe</div>
            </div>
        </header>
    )
}

