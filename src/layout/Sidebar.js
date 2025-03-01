import React from "react"

export default function Sidebar({ showContent }) {
    return (
        // Sidebar
        <aside>
            <ul>
                <li><a href="#" onClick={() => showContent('settings')}>Settings</a></li>
                <li><a href="#" onClick={() => showContent('products')}>Products</a></li>
                <li><a href="#" onClick={() => showContent('inventory')}>Inventory</a></li>
                <li><a href="#" onClick={() => showContent('formulas')}>Formulas</a></li>
                <li><a href="#" onClick={() => showContent('production')}>Production</a></li>
            </ul>
        </aside>
    )
}