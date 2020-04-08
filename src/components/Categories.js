import React, { Component } from 'react';

export default class Categories extends Component {
    
    state = {
        categories : false
    }

    sendCategory = (e) => {
        this.props.category(e.target.getAttribute('name'))
    }

    triggerCategories = () => {
        this.setState({categories:!this.state.categories})
    }

    render() {
        const categoryList = <div>
        <h2 onClick={this.sendCategory} name="all">All</h2>
        <h2 onClick={this.sendCategory} name="dairy">Dairy</h2>
        <h2 onClick={this.sendCategory} name="fruits">Fruits</h2>
        <h2 onClick={this.sendCategory} name="vegetables">Vegetables</h2>
        <h2 onClick={this.sendCategory} name="grains">Grains</h2>
        <h2 onClick={this.sendCategory} name="proteins">Proteins</h2>
        <h2 onClick={this.sendCategory} name="cleaning">Cleaning</h2>
        <h2 onClick={this.sendCategory} name="others">Others</h2>
        </div>

        return(
            <div className="Categories" id="">
                <div className="CategoriesTitle">
                    <h1>Categories</h1>
                    <button className="CategoriesButton" onClick={this.triggerCategories}>{this.state.categories?'-':'+'}</button>
                </div>
                {this.state.categories?categoryList:null}
                <div className="ShowCategories">{categoryList}</div>
            </div>
        )
    }
}