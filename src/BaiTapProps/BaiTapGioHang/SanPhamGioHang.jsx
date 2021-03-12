import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        const {spGH,themGioHang} = this.props;
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={spGH.hinhAnh} alt={spGH.hinhAnh} width={300} height={350}/>
                <div className="card-body">
                    <h4 className="card-title">{spGH.tenSP}</h4>
                    <button className="btn btn-danger" onClick={() => themGioHang(spGH)}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
