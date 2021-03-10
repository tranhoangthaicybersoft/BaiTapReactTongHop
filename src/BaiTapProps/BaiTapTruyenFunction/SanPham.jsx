import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp,xemChiTiet} = this.props;
        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={sp.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => xemChiTiet(sp)}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
