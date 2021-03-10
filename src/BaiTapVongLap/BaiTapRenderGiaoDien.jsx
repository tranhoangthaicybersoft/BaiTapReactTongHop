import React, { Component } from 'react'
import Data from './Data/data.json'
export default class BaiTapRenderGiaoDien extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangPhim: Data
        }
    }

    renderMangPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.biDanh} width={200} height={350}/>
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substring(0,100) + '... Xem Thêm' : phim.moTa}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderMangPhim()}
                </div>
            </div>
        )
    }
}
