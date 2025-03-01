import React, { Component } from "react"
import Header from "./layout/header"
import Sidebar from "./layout/Sidebar"
import Footer from "./layout/Footer"
import "./App.css"


class App extends Component {

    state = {
        activeContent: 'settings'
    }

    showContent = (id) => {
        this.setState({ activeContent: id })
    }

    render() {
        return (
            <>


                <Header />

                <div className="container">
                    {/* Sidebar */}
                    <Sidebar showContent={this.showContent} />

                    {/* Main Content */}
                    <main>
                        <div id="settings" className={`content ${this.state.activeContent === 'settings' ? 'active' : ''}`}>
                            <h1>Settings</h1>
                            <p>Here is where we will list the settings</p>
                        </div>
                        <div id="products" className={`content ${this.state.activeContent === 'products' ? 'active' : ''}`}>
                            <h1>Products</h1>
                            <p>Here is where we will list the products</p>
                        </div>
                        <div id="inventory" className={`content ${this.state.activeContent === 'inventory' ? 'active' : ''}`}>
                            <h1>Inventory</h1>
                            <p>Here is where we will list the formulas</p>
                        </div>
                        <div id="formulas" className={`content ${this.state.activeContent === 'formulas' ? 'active' : ''}`}>
                            <h1>Formulas</h1>
                            <p>Here is where we will list the formulas</p>
                        </div>
                        <div id="production" className={`content ${this.state.activeContent === 'production' ? 'active' : ''}`}>
                            <h1>Production</h1>
                            <p>Here is where we will list the settings</p>
                        </div>
                    </main>
                </div>

                {/* Footer */}
                <Footer />
            </>
        )
    }
}

export default App