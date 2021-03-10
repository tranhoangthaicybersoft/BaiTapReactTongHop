import React, { Component } from 'react'

export default class Phim_RCC extends Component {

    // Đối với react class components sẽ truyền thuộc tính props qua this.props
    constructor(props) {
        super(props);
    }

    render() {
        // Bóc tách phần tử từ props
        const {phim_input} = this.props;
        const {hinhAnh,tenPhim,moTa} = this.props.phim_input
        return (
            <div className="card text-left">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <p className="card-text">{moTa}</p>
                </div>
            </div>
        )
    }
}
