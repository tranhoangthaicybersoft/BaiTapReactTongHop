// Import thư viện redux
import {combineReducers} from 'redux';
// Import các store con
import {GioHangReducer} from './GioHangReducer'
// Store tổng ứng dụng
// Reducer chứa các biến của ứng dụng trên local store  
export const rootReducer = combineReducers({
    // Nơi sẽ chứa các  reducer cho từng nghiệp vụ ( store con , lấy và lưu trữ dữ liệu)
    // tên thuộc tính : hàm reducer
    GioHangReducer : GioHangReducer 
    // Tạo component giỏ hàng thì ta kết với store sau đó lấy về
})