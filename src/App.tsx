import * as React from 'react';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import './App.css'
import ProductsModule from './module/ProductsModule';



export default function ProduzirClientApp() {



    return (

        <>
            <Header />
            <div className='container'>
                <Sidebar />
                <main style={{ backgroundColor: '#f0f4f8' }}>
                    <div id='home' className='content'>
                        Home
                    </div>
                    <div id='settings' className='content'>
                        Settings
                    </div>
                    <div id='products' className='content active'>
                        <ProductsModule />
                    </div>
                    <div id='inventory' className='content'>
                        Inventory
                    </div>
                    <div id='formulas' className='content'>
                        Formulas
                    </div>
                    <div id='production' className='content'>
                        Production
                    </div>
                </main>
            </div>

            <Footer />




        </>

    );
}