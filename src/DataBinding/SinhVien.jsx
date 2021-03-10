import React, { Component } from 'react'

export default class SinhVien extends Component {
    // Rcc là lớp đối tượng sinhVien
    // Thuộc tính : hoTen , Lop la thuoc tính của lớp đối tượng sinhVien
    hoTen = 'Thái';
    lop = 'FrontEnd';
    // tenTrungTam = 'dss';

    // Đây là phương thức tự tạo
    renderThongTinSinhVien = (tenTrungTam) => {
        return (
            <ul>
                <li>Họ tên :{this.hoTen}</li>
                <li>Lớp :{this.lop}</li>
                <li>Trung tâm : {tenTrungTam}</li>
            </ul>
        )
    }
    // Phương thức Render là phương thức thuộc lớp đối tượng sinhVien
    render() {
        // Biến của hàm render
        const tenTrungTam = 'fdfd'
        return (
            <div className="container">
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}
