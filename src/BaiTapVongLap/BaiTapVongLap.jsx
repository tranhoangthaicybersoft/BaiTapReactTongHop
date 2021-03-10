import React, { Component } from 'react'

export default class BaiTapVongLap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'Iphone X', gia: 1000 },
                { maSP: 2, tenSP: 'Huawei Mate 20 Pro', gia: 2000 },
                { maSP: 3, tenSP: 'Samsung Galaxy Note 20', gia: 1000 },
            ]
        }
    }

    // Viết phương thức Render các sản phẩm thành các tg tr


    // Sử dụng map để tạo động các JSX
    // renderSanPham = () => {
    //     // Để render ra giao diện các tập hợp đối tượng JSX thì chúng ta cần dùng mảng để lưu trữ ( tức là mảng đối tượng)
    //     return this.state.mangSanPham.map((sanPham, index) => {
    //         return (<tr key={index}>
    //             <td>{sanPham.maSP}</td>
    //             <td>{sanPham.tenSP}</td>
    //             <td>{sanPham.gia}</td>
    //         </tr>)
    //     })


    // for (let i = 0; i < this.state.mangSanPham.length; i++) {
    //     const sanPham = this.state.mangSanPham[i];
    //     contentTable.push(<tr key={i}>
    //         <td>{sanPham.maSP}</td>
    //         <td>{sanPham.tenSP}</td>
    //         <td>{sanPham.gia}</td>
    //     </tr>)
    // }
// }

render() {
    // Hàm trong phương thức render sẽ tương tự 1 biến 
    const renderSanPham = () => {
        // Để render ra giao diện các tập hợp đối tượng JSX thì chúng ta cần dùng mảng để lưu trữ ( tức là mảng đối tượng)
        return this.state.mangSanPham.map((sanPham, index) => {
            return (<tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
            </tr>)
        })
    }
        return (
            // Các thẻ tag trong này là đối tượng của JSX
            <div className="container">
                <h3 className="bg-dark p-5 text-center text-white">Demo Vòng Lặp React</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Mã sản phẩm</th>
                            <th>Mã sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderSanPham()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Mục đích của vòng lặp là từ một mảng dữ liệu ( mảng đối tượng ) ta có thể render nó ra giao diện bằng các tag đối tượng JSX