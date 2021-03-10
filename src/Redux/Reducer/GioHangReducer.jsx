// Khởi tạo giá trị ban đầu của store
const stateGioHang = {
    // Giống như state component , những dữ liệu thay đổi trong tương lai sẽ được lưu trữ tại state Giỏ hàng ( store)
    gioHang : [{maSP:1,tenSP:'Iphone',hinhAnh:'.././img/sp_iphoneX.png',soLuong:1,giaBan:1000,thanhTien:1000}]
}

// State của giỏ hàng sẽ là state mặc định của giỏ hàng , action là hành động gửi dữ liệu lên làm thay đổi state để component tự động render lại giao diện 
export const GioHangReducer = (state = stateGioHang , action ) => {
    return {...state}
}


// Mục tiêu là quản lý các biến có thể thay đổi trên store