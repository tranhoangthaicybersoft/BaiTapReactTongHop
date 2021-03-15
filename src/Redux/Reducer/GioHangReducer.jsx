// Khởi tạo giá trị ban đầu của store
const stateGioHang = {
    // Giống như state component , những dữ liệu thay đổi trong tương lai sẽ được lưu trữ tại state Giỏ hàng ( store)
    gioHang: []
}

// State của giỏ hàng sẽ là state mặc định của giỏ hàng , action là hành động gửi dữ liệu lên làm thay đổi state để component tự động render lại giao diện 
const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG':
            {
                let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
                if (index !== -1) {
                    state.gioHang[index].soLuong += 1;
                }
                else {
                    state.gioHang.push(action.spGioHang)
                }
                // Set state : cập nhật lại state
                state.gioHang = [...state.gioHang];
                // Dùng restparam biến thành state mới bởi vì phải có state mới thì mới cập nhật lại giao diện
                return { ...state };
            };break;
        case 'XOA_GIO_HANG':
            {
                let gioHangCapNhat = [...state.gioHang];
                // Tìm ra phần tử cần xóa dựa vào maSP
                let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
                if (index !== -1)
                {
                    gioHangCapNhat.splice(index,1);
                }
                // Cập nhật lại giỏ hàng mới để component render lại
                state.gioHang = gioHangCapNhat;
                // Dùng restparam biến thành state mới bởi vì phải có state mới thì mới cập nhật lại giao diện
                return {...state};
            };break;
        case 'TANG_GIAM_SO_LUONG':
            {
                let gioHangCapNhat = [...state.gioHang];
                // Xử lý tăng giảm trên gioHangCapNhat
                let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
                if (index !== -1)
                {
                    if(action.tangGiam)
                    {
                        gioHangCapNhat[index].soLuong += 1;
                    }
                    else
                    {
                        if(gioHangCapNhat[index].soLuong > 1)
                        {
                            gioHangCapNhat[index].soLuong -= 1;
                        }
                        else
                        {
                            alert('Số lượng tối thiểu là 1');
                        }
                    }
                }
                // Lấy giá trị gioHangCapNhat gán vào state.gioHang
                state.gioHang = gioHangCapNhat;
                return {...state}
            }
        default : return { ...state }
    }
}

export default GioHangReducer;

// Mục tiêu là quản lý các biến có thể thay đổi trên store

// Chỉ những nguồn làm cho dữ liệu thay đổi như State ( thì mới đặt trong Redux Store)
// Trả về state mới và trả về giao diện