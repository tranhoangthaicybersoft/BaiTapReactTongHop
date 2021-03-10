import React, { Component } from 'react'

export default class Event extends Component {

    // Phương thức xử lý cho nút click
    handleShowMessage = (a) => {
        alert(a)
    }
    render() {
        let message = 'Heello';

        return (
            <div className="container">
                {/*Cách 1 : dùng bind để truyền hàm có tham số*/}
                {/* <button onClick={this.handleShowMessage.bind(this,message)}>Show Message</button> */}
                {/*Cách 2 : dùng hàm nặc danh arrowfunction trả về hàm có tham số*/}
                <button onClick={() => this.handleShowMessage(message)}>Show message</button>
            </div>
        )
    }
}

// Kỹ thuật closesure function
/**
 * function main (message)
 * {
 *     return function demo()
 *          alert(message);
 * }
 * 
 * -> Chạy hàm 
 * main('message')()
 * 
 * const funcDemo = main('hello');
 * funcDemo();
 */