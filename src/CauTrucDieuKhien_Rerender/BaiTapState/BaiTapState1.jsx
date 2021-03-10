import React, { Component } from 'react'

export default class BaiTapState1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hinhAnh: "../img/red-car.jpg"
        }
    }

    // Viết phương thức đổi màu xe
    changeColor = (color) => {
        let imgSrc = '';
        switch(color){
            case 'red' : {
                imgSrc = '../img/red-car.jpg';
            };break;
            case 'silver' : {
                imgSrc = '../img/silver-car.jpg'
            };break;
            case 'black' : {
                imgSrc = '../img/black-car.jpg'
            };
        }
        console.log('imgSrc',imgSrc);

        // Gọi phương thức setState để truyền imgSource mới từ sự kiện click của button => render lại giao diện với source mới
        this.setState({
            hinhAnh : imgSrc
        })
    }
    render() {

        // Thêm CSS inline cho button  bằng đối tượng 
        const styleButton = {
            color : '#fff' ,
            marginRight : '10px'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Vui lòng chọn màu xe</h1>
                        <img width={400} height={200} src={this.state.hinhAnh} />
                    </div>
                    <div className="col-md-5 ">
                        <h1>Change Color</h1>
                        <button onClick={()=>this.changeColor('red')} className="btn btn-danger" style={styleButton}>Red Car</button>
                        <button onClick={()=>this.changeColor('silver')} className="btn btn-dark" style={styleButton}>Silver Car</button>
                        {/*TThêm CSS inline bằng cách dùng {{các thuộc tính CSS của JS}} */}
                        <button onClick={()=>this.changeColor('black')} className="btn" style={{color:'#fff', backgroundColor:'#000'}}>Black Car</button>
                    </div>
                </div>
            </div>
        )
    }
}
