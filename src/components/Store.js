import React, { Component } from 'react';
import Products from "./Products"
import Categories from "./Categories"

export default class Store extends Component {

    state = {
        category:"all"
    }

    getCategory = (category) => {
        this.setState({category: category})
    }

    render() {
        return(
            <div className="Store" id="">
                <div className="StoreItems">
                    <Categories category={this.getCategory}></Categories>
                    <Products productCategory={this.state.category}></Products>
                </div>
            </div>
        )
    }
}