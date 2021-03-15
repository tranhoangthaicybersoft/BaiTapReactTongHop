import React, { Component } from 'react'

// Sử dụng thư viện connect để láy dữ liệu từ store về
// Sử dụng hàm connect trong react redux
import {connect} from 'react-redux'
class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang);
        return (
            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style={{minWidth:800}}>
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Mã sp</th>
                                        <th>Hình ảnh</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.gioHang.map((spGh,index)=>{
                                        return <tr key="index">
                                            <td>{spGh.maSP}</td>
                                            <td><img src={spGh.hinhAnh} alt={spGh.hinhAnh} width={50} height={50}></img></td>
                                            <td>{spGh.tenSP}</td>
                                            <td>{spGh.giaBan.toLocaleString()}</td>
                                            <td>
                                                <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(spGh.maSP,true)}}>+</button>
                                                {spGh.soLuong}
                                                <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(spGh.maSP,false)}}>-</button>
                                            </td>
                                            <td>{(spGh.soLuong * spGh.giaBan).toLocaleString()}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(spGh.maSP)}}>Xóa</button></td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <th colSpan={5}></th>
                                    <th>Tổng tiền</th>
                                    <th>{this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                        return tongTien += spGH.soLuong * spGH.giaBan
                                    },0).toLocaleString()}</th>
                                </tfoot>
                            </table>
                  </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Hàm lấy state redux biến đổi thành props của components
const mapStateToProps = (state) => { // State ở đây chính là state tổng (root reducer) chứa các state con
    return {
        gioHang : state.stateGioHang.gioHang
    }
}


// Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang : (maSP) => {
            // Tạo ra action
            let action = {
                type : 'XOA_GIO_HANG',maSP
            };
            // Dùng phương thức dispatch redux cung cấp để đưa dữ liệu lên reducer
            console.log(maSP);
            dispatch(action)
        },
        tangGiamSoLuong : (maSP,tangGiam) => {
            // TangGiam : true thì tăng , false thì giảm
            // Tạo action để đưa dữ liệu lên reducer
            let action = {
                type : 'TANG_GIAM_SO_LUONG',maSP,tangGiam
            };
            // Để đưa action lên reducer mỗi khi người dùng click vào
            dispatch(action)
        }
    }
}

// mapStateToProps tạo ra biến để binding dữ liệu ra giao diện

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)