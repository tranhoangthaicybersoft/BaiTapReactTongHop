import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPhamGioHang extends Component {
    render() {
        let { mangSanPham , themGioHang } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {mangSanPham.map((spGH, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <SanPhamGioHang themGioHang = {themGioHang} spGH={spGH} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
