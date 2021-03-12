import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang'
import phoneData from '../../BaiTapVongLap/Data/phoneData.json'

export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }

    // Sử dụng callback function để xử lý data ở component có data  
    // Thêm giỏ hàng
    themGioHang = (sanPhamChon) => {
        console.log(sanPhamChon);
        // Bước 1 : từ sp được chọn ra sp giỏ hàng
        let spGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1
        }
        // Kiểm tra được click có trong giỏ hàng chưa ?
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)
        // Đã có trong giỏ hàng
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        }
        // Sản phẩm được click chưa có trong this.state.gioHang
        else {
            gioHangCapNhat.push(spGioHang);
        }
        // Set state để component render lại 
        this.setState({
            gioHang: gioHangCapNhat
        })
    }


    // Đặt sự kiện xóa giỏ hàng tại component BaiTapGioHang
    xoaGioHang = (maSP) => {
        // Cách 1 : Tìm trong giỏ hàng có sp chứa maSP được click thì xóa
        // let gioHangCapNhat = [...this.state.gioHang]
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        // if ( index !== 1)
        // {
        //     gioHangCapNhat.splice(index,1);
        // }
        // Cách 2 : Dùng hàm filter ( hàm này sẽ trả về một mảng thõa điều kiện trong arrowfunction )
        let gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);
        // Cập nhật lại state giỏ hàng và render giao diện
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => { // Tăng giảm == true thì tăng số lượng , false thì giảm số lượng
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        // Xử lý tăng giảm 
        if (tangGiam) {
            if (gioHangCapNhat[index].soLuong >= 1) {
                gioHangCapNhat[index].soLuong += 1;
            }
        }
        else
            {
                if(gioHangCapNhat[index].soLuong > 1)
                gioHangCapNhat[index].soLuong -= 1;
            }
        // Cập nhật lại giá trị và render lại giỏ hàng
        this.setState({
            gioHang : gioHangCapNhat
        })

    }

    render() {
        let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.soLuong
        }, 0)
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
                <ModalGioHang xoaGioHang={this.xoaGioHang} tangGiamSL={this.tangGiamSoLuong} gioHang={this.state.gioHang} />
                <div className="text-right text-danger "><span style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }} data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongSoLuong})</span></div>
                <DanhSachSanPhamGioHang themGioHang={this.themGioHang} mangSanPham={phoneData} />
            </div>
        )
    }
}
