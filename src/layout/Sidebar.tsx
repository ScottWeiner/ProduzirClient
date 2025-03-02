import React from 'react';

interface SidebarProps {
    showContent: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showContent }) => {
    return (
        <aside>
            <ul>
                <li><a href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('settings');
                }}>Settings</a></li>
                <li><a href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('products');
                }}>Products</a></li>
                <li><a href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('inventory');
                }}>Inventory</a></li>
                <li><a href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('formulas');
                }}>Formulas</a></li>
                <li><a href="#" onClick={(e) => {
                    e.preventDefault();
                    showContent('prouction');
                }}>Production</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar; 