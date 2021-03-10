import React, { Component } from 'react'
import phoneData from '../../BaiTapVongLap/Data/phoneData.json'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sanPhamChiTiet: phoneData[0]
        }
    }

    renderSanPham = () => {
        return phoneData.map((sp, index) => {
            return (
                <SanPham key={index} sp={sp} xemChiTiet={this.xemChiTiet}/>
            )
        })
    }

    // Dữ liệu cần lấy ở component DanhSachSanPham => Đặt callback function tại DanhSachSanPham

    // Xử lý nút xem chi tiết
    xemChiTiet = (sanPham) => {
        console.log(sanPham);
        // Thay đổi giá trị
        this.setState({
            sanPhamChiTiet : sanPham
        })
    }
    
    render() {
        let {sanPhamChiTiet} = this.state;
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6 text-left">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} width={300} height={350}></img>
                    </div>
                    <div className="col-6">
                        <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                        <tr>
                            <th>Màn hình</th>
                            <th>{sanPhamChiTiet.manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>{sanPhamChiTiet.heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <th>{sanPhamChiTiet.cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>{sanPhamChiTiet.cameraSau}</th>
                        </tr>
                        <tr>
                            <th>Ram</th>
                            <th>{sanPhamChiTiet.ram}</th>
                        </tr>
                        <tr>
                            <th>Rom</th>
                            <th>{sanPhamChiTiet.rom}</th>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        )
    }

}
