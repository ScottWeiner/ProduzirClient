import React from 'react';




const Sidebar: React.FC = () => {

    const showContent = (id: string) => {

        document.querySelectorAll('.active').forEach(div => {
            div.classList.remove('active')
        })

        document.getElementById(id)?.classList.add('active')

        document.querySelectorAll('a').forEach(li => {
            li.classList.remove('active-link')
        })

        const listId = 'li-a-' + id

        document.getElementById(listId)?.classList.add('active-link')
    }

    return (
        <aside>
            <ul>
                <li id='li-home'><a id='li-a-home' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('home');
                }}>Home</a></li>
                <li id='li-settings'><a id='li-a-settings' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('settings');
                }}>Settings</a></li>
                <li id='li-products'><a id='li-a-products' className='active-link' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('products');
                }}>Products</a></li>
                <li id='li-inventory'><a id='li-a-inventory' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('inventory');
                }}>Inventory</a></li>
                <li id='li-formulas'><a id='li-a-formulas' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('formulas');
                }}>Formulas</a></li>
                <li id='li-production'><a id='li-a-production' href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('production');
                }}>Production</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar; 