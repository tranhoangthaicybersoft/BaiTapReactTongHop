import React, { Component } from 'react'
import ProductItemRedux from './ProductItemRedux'
import phoneData from '../../../BaiTapVongLap/Data/phoneData.json'
export default class ProductListRedux extends Component {


    mangDienThoai = phoneData;
    
    renderProductItem = () => {
        return this.mangDienThoai.map((sp, index) => {
            {/**Thứ gì đặt trong vòng lặp thì luôn đặt key */}
            return  <div className="col-4" key={index}>
                    <ProductItemRedux product={sp} />
                    </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProductItem()}
            </div>
        )
    }
}
