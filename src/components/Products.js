import React from 'react'
import Product from './Product';
import ProductsList from '../products.json';

export default function Products(props) {
    return(
        <div className="Products" id="">
            {ProductsList.map((product)=>{
                if(props.productCategory != "all" && product.category == props.productCategory){
                    return <Product
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    ></Product>
                }
                else if(props.productCategory == "all"){
                    return <Product
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    ></Product>
                }
            })}
        </div>
    )
}