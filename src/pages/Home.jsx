import React from 'react';
import './Home.css'; 
import logo from '../assets/logo.jpg';


const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-card">
        
        <img src={logo} alt="Logo" />
        
        <h1 className="profile-name">ชนันนัทธ์ จำเดิม (เบส)</h1>
        <p className="student-id">รหัสนักศึกษา: 67129397</p>
        
        <div className="education-info">
          <p>ชั้นปีที่ 2</p>
          <p>สาขาวิทยาการคอมพิวเตอร์ ( การพัฒนาซอฟต์แวร์ Fullstack )</p>
          <p>คณะเทคโนโลยีสารสนเทศ </p>
        </div>
        

      </div>
    </div>
  );
}

export default Home;
