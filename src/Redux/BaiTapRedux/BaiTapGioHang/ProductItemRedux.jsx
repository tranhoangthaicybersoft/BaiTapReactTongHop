import React, { Component } from 'react'

// Sử dụng thư viện kết nối với redux
import { connect } from 'react-redux'

class ProductItemRedux extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="card text-left">
                <img style={{ width: 350, height: 350 }} className="card-img-top" src={product.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {this.props.themGioHang(product)}}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

// Hàm gửi dữ liệu lên store

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            // Tạo ra sản phẩm giỏ hàng
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                giaBan: sanPham.giaBan}
                console.log(spGioHang);
            // Tạo ra action
            let action = {
                type : 'THEM_GIO_HANG', spGioHang // Thuộc tính bắt buộc của action
            }
            // Dùng hàm dispatch từ redux => gửi dữ liệu lên reducer 
            dispatch(action);
        }
    }
}
// mapDispatchToProps tạo ra hàm để đưa dữ liệu lên reducer store

// Nếu không cần lấy gì về thì tham số thứ nhất để null
export default connect(null,mapDispatchToProps)(ProductItemRedux)

// Nơi nào cần lấy dữ liệu từ Redux về hay truyền