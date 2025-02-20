import React from 'react';
import '../style/loading.css'; // แน่ใจว่าเชื่อมโยงกับไฟล์ CSS

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>กำลังโหลด...!</p>
    </div>
  );
};

export default Loading;
