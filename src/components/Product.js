import React, { Component } from 'react';

export default class Product extends Component {

    sendProducts = () => {
        if(localStorage.getItem('products')){
            this.props.products(JSON.parse(localStorage.getItem('products')));
        }
    }

    addProduct = () =>{
        const newProduct = {
            name:this.props.name,
            price:this.props.price,
            image:this.props.image,
            category:this.props.category,
            quantity:1
        };
        if(localStorage.getItem('products')){
            let productExists = false;
            const cartProducts = JSON.parse(localStorage.getItem('products'));
            cartProducts.map(product => {
                if(product.name == newProduct.name){
                    product.quantity ++;
                    productExists = true;
                }
            })
            if(!productExists){
                cartProducts.push(newProduct);
                productExists= false;
            }
            localStorage.setItem('products', JSON.stringify(cartProducts))
        }else{
            localStorage.setItem('products', JSON.stringify([newProduct]))
        }
    }

    deleteProduct = () =>{
        if(localStorage.getItem('products')){
            let cartProducts = JSON.parse(localStorage.getItem('products'));
            cartProducts = cartProducts.filter(product => product.name != this.props.name);
            localStorage.setItem('products', JSON.stringify(cartProducts))
        }
        this.sendProducts();
    }

    removeOneProduct = () => {
        if(localStorage.getItem('products')){
            const cartProducts = JSON.parse(localStorage.getItem('products'));
            cartProducts.map(product => {
                if(product.name == this.props.name){
                    if(product.quantity > 0){
                    product.quantity --;
                    }
                }
            })
            localStorage.setItem('products', JSON.stringify(cartProducts))
        }
        this.sendProducts();
    }

    addOneProduct = () => {
        if(localStorage.getItem('products')){
            const cartProducts = JSON.parse(localStorage.getItem('products'));
            cartProducts.map(product => {
                if(product.name == this.props.name){
                    product.quantity ++;
                }
            })
            localStorage.setItem('products', JSON.stringify(cartProducts))
        }
        this.sendProducts();
    }

    render() {
        return(
            <div className="Product" id="">
                <img src={(this.props.image)?this.props.image:"/images/noimg.png"} alt={this.props.image}></img>
                <div className="ProductData">
                    <div className="ProductInfo">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.price}$</h3>
                    </div>
                    <button className="AddButton" onClick={this.addProduct}>Add product</button>
                    <div className="CartOptions">
                        <h2>Quantity</h2>
                        <div className="ManageQuantity">
                            <button className="AddRemove" onClick={this.removeOneProduct}>-</button>
                            <h3>{this.props.quantity}</h3>
                            <button className="AddRemove" onClick={this.addOneProduct}>+</button>
                        </div>
                        <button className="DeleteButton" onClick={this.deleteProduct}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}