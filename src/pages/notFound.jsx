import React from 'react';
import '../style/notFound.css'; // อย่าลืมเชื่อมโยงกับไฟล์ CSS

const Notfound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">หน้าเว็บที่คุณค้นหาไม่พบ</p>
        <a href="/" className="notfound-link">กลับไปยังหน้าหลัก</a>
      </div>
    </div>
  );
};

export default Notfound;
