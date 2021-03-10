import React from 'react'
import './App.css';
import BaiTapComponent from './Component/BaiTap/BaiTapComponent';
import SinhVien from './DataBinding/SinhVien';
import Event from './DataBinding/Event';
import DemoIf from './CauTrucDieuKhien_Rerender/DemoIf';
import BaiTapState from './CauTrucDieuKhien_Rerender/BaiTapState/BaiTapState';
import BaiTapVongLap from './BaiTapVongLap/BaiTapVongLap';
import BaiTapRenderGiaoDien from './BaiTapVongLap/BaiTapRenderGiaoDien';
import Props from './BaiTapProps/Props';
import BaiTapTruyenFunction from './BaiTapProps/BaiTapTruyenFunction/BaiTapTruyenFunction';
import BTGioHangRedux from './Redux/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
function App() {
  return (
    <div className="App">
        {/* <BaiTapComponent/> */}
        {/* <SinhVien/> */}
        {/* <Event/> */}
        {/* <DemoIf/> */}
        {/* <BaiTapState/> */}
        {/* <BaiTapVongLap/> */}
        {/* <BaiTapRenderGiaoDien/> */}
        {/* <Props/> */}
        <BaiTapTruyenFunction/>
        {/* <BTGioHangRedux/> */}
    </div>
  );
}

export default App;
