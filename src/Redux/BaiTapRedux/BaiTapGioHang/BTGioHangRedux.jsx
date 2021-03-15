import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'

// Import thư viện connect kết nối react component và redux store
import { connect } from 'react-redux'
class BTGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSL, spGH, index) => {
            return tongSL += spGH.soLuong;
        }, 0)
    }

    render() {
        return (
            <div className="container">
                <h3 className='text-center text-danger'>Danh sách các sản phẩm</h3>
                <div className="text-right">
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5">
                            <i className="fa fa-cart-arrow-down">Giỏ hàng ({this.renderSoLuong()})</i>
                        </i>
                    </span>
                </div>
                <ProductListRedux />
                <GioHangRedux />
            </div>
        )
    }
}
// Viết hàm lấy giá trị state từ redux store về biến thành props component
const mapStateToProps = (state) => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BTGioHangRedux)