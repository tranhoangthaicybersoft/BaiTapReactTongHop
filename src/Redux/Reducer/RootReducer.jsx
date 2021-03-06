// Import thư viện redux
import {combineReducers} from 'redux';
// Import các store con
import GioHangReducer from './GioHangReducer'
// Store tổng ứng dụng
// Reducer chứa các biến của ứng dụng trên local store  
const rootReducer = combineReducers({
    // Nơi sẽ chứa các  reducer cho từng nghiệp vụ ( store con , lấy và lưu trữ dữ liệu)
    // tên thuộc tính : hàm reducer
    stateGioHang : GioHangReducer 
    // Tạo component giỏ hàng thì ta kết với store sau đó lấy về
})

export default rootReducer;

// Khi dùng export default sẽ không cần {}
// Export thì sẽ cần