import React, { Component } from 'react'

export default class classcomponent extends Component {
    // Thuộc tính 


    // Phương thức
    render() {



        // Nội dung thẻ được định nghĩa trong hàm render
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        )
    }
}
