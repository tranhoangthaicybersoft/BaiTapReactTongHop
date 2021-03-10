import React, { Component } from 'react'
import Product from './Product'
export default class ProductList extends Component {

    constructor(props)
    {
        super(props);
    }
    
    renderSanPham = () => {
        // Lấy giá trị mảng sản phẩm từ component cha truyền vào thông qua thuộc tính this.props  
        let {mangSanPham , xemChiTiet} = this.props;

        return mangSanPham.map((sanPham,index)=>{
            return (
                // Đây là đối tượng JSX , mỗi đối tượng sinh ra từ vòng lặp thì phải có thuộc tính key
                // Mỗi lần lặp ta tạo ra 1 component Product
                    <Product xemChiTiet={xemChiTiet} sanPham={sanPham} key={index}/>
            )
        })
    }
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </section>

        )
    }
}
