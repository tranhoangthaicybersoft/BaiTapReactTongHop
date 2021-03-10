import React, { Component } from 'react'

export default class DemoIf extends Component {

    // Những thuộc tính của component DemoIf được kế thừa từ lớp cha
    constructor(props)
    {
        super(props);
        // this.state là thuộc tính có sẵn của component , chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của component
        this.state = {
            isLogin : false ,
            userName : ''
        }
    }
    // Thuộc tính

    // Cách 1 : dùng phương thức kết hợp If để xác định nội dung Render ra giao diện
    // renderContent = () => {
    //     if (this.isLogin) // Đăng nhập rồi : người dùng đã đăng nhập
    //     {
    //         this.userName = 'Thái'
    //         return ( 
    //             <div>
    //                 Hello {this.userName} <button>Log Out</button>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div>
    //             <button>Login</button>
    //         </div>
    //     )
    // }

    // Tạo phương thức login khi click vào nút login
    login = () => {
        // this.setState : Là phương thức kế thừa từ class của component => Thay đổi giá trị state và gọi hàm render => render lại giao diện
        // this.setState : là phương thức bất đồng bộ
        this.setState({
            isLogin : true,
            userName : 'Thái hacker'
        },() => {
            console.log(this.state);
        })
    }

    logout = () => {
        this.setState({
            isLogin :  false,
            user : ''
        })
    }
    // Phương thức render của component DemoIf

    render() {
        return (
            <div>
                {/*Gọi hàm để render */ }
                {/* {this.renderContent()} */}
                {/*Dùng toán tử ba ngôi render*/}
                {this.state.isLogin ?  <p>Hello {this.state.userName} <button onClick={this.logout}>Log Out</button></p> : <button onClick={this.login}>Login</button>}
            </div>
        )
    }
}
