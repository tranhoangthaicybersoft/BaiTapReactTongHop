import React, { Component } from 'react'

// Kết nối redux ( Kết nối react component - redux Store) sử dụng lệnh như dưới
import {connect} from 'react-redux'
class ModalGioHangRedux extends Component {
    // Viết phương thức render giỏ hàng
    // This.props.gioHang là thuộc tính nhận từ redux / Props sẽ nhận dữ liệu từ redux
    renderGioHang = () => {
        return this.props.gioHang.map((spGH,index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={75} height={125} /></td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
            </tr>
        })
    }

    render() {
        console.log(this.props.gioHang);    
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán </th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Để kết nối thực hiện phương thức sau :

// Đây là hàm nó nhận tham số là giá trị của store tổng 
const mapStateToProps = (state) => {
    return {
        // Trả về một object và object đó trở thành props của component / state ở đây chính là rootreducer => truy xuất đến store con ( Giỏ hàng reducer ) => truy xuất đến biến state mà chúng ta đặt sẵn nó sẽ thay đổi => và biến nó thành props để truyền dữ liệu từ redux store đến react component
        gioHang : state.GioHangReducer.gioHang 
        // phương thức này sẽ lấy dữ liệu về và tạo thành props của component ModalGioHangRedux
    }
}

export default connect(mapStateToProps,null)(ModalGioHangRedux)
// Sau khi phương thức connect được gọi thì nó sẽ trả về một component mới có tên là ModalGioHangRedux và chứa thêm thuộc tính nữa đó là thuộc tính giỏ hàng