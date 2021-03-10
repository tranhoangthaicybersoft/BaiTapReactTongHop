import React from 'react'

// Reacr function thì nhận props thông qua tham số truyền vào hàm

export default function Phim_RFC({phim_input,...restParam}) {
    // Nhận giá trị thông qua props 
    // let phim = props.phim_input;
    // Bóc tách phần tử 
    // let {phim_input} = props;
    
    return (
        <div classname="card text-left">
            <img classname="card-img-top" src={phim_input.hinhAnh} alt />
            <div classname="card-body">
                <h4 classname="card-title">{phim_input.tenPhim}</h4>
                <p classname="card-text">Text</p>
            </div>
        </div>
    )
}
