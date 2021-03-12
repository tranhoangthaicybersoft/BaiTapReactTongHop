import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    render() {
        const {gioHang , xoaGioHang , tangGiamSL} = this.props;
        console.log(gioHang);
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ maxWidth: "800px", width: '800px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>Mã SP</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên SP</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gioHang.map((spGH, index) => {
                                            return ( <tr key={index}>
                                                    <td>{spGH.maSP}</td>
                                                    <td><img src={spGH.hinhAnh} width={50} height={75}/></td>
                                                    <td>{spGH.tenSP}</td>
                                                    <td>
                                                        <button onClick={() => tangGiamSL(spGH.maSP,true)} className="btn btn-success">+</button>
                                                        {spGH.soLuong}
                                                        <button onClick={() => tangGiamSL(spGH.maSP,false)}className="btn btn-success">-</button>
                                                    </td>
                                                    <td>{spGH.giaBan.toLocaleString()}</td>
                                                    <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                                    <td><button onClick={() => xoaGioHang(spGH.maSP)}  className="btn btn-danger">Xóa</button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng tiền</td>
                                            <td>{gioHang.reduce((tongTien,spGH,index)=>{
                                                return tongTien += (spGH.soLuong * spGH.giaBan)
                                            },0).toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
