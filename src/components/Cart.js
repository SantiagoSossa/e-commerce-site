import React, { Component } from 'react';
import Product from './Product'

export default class Cart extends Component {

    state = {
        products: [],
        total: 0
    }

    componentDidMount(){
        localStorage.getItem('products') && this.setState({
            products: JSON.parse(localStorage.getItem('products'))
        }, this.getTotal)
    }

    getProducts = (products) =>{
        this.setState({products:products},this.getTotal)
    }

    getTotal = () => {
        let total = 0;
        this.state.products.map( product => {
            total += product.price * product.quantity;
        })
        this.setState({total:total});
    }

    render() {
        return(
            <div className="Cart" id="">
                {this.state.products.map( product => {
                    return <Product
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    quantity={product.quantity}
                    products= {this.getProducts}
                    ></Product>
                })}
                <h1>Total: {this.state.total}$</h1>
            </div>
        )
    }
}