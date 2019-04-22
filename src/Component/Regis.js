import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="conrainer-fluid banner">
                <form action="/action_page.php">
                    <div className="container">
                        <h1>สมัครใช้งาน</h1>
                        <p>โปรดกรอกข้อมูลให้ครบถ้วน</p>
                        <hr />
                        <label htmlFor="Name"><b>ชื่อ</b></label>
                        <input type="text" name="name" required />
                        <label htmlFor="Lastname"><b>นามสกุล</b></label>
                        <input type="text" name="Lastname" required />
                        <label htmlFor="stdid"><b>ID นักศึกษา</b></label>
                        <input type="text" name="stdid" required />
                        <label htmlFor="school"><b>สำนักวิชา</b></label>
                        <input type="text" name="school" required />
                        <label htmlFor="school"><b>สาขาวิชา</b></label>
                        <input type="text" name="major" required />
                        <label htmlFor="school"><b>ชั้นปี</b></label>
                        <input type="text" name="year" required />
                        <label htmlFor="email"><b>E-mail</b></label>
                        <input type="text" name="email" required />
                        <label htmlFor="psw"><b>รหัสผ่าน</b></label>
                        <input type="password" name="psw" required />
                        <label htmlFor="psw-repeat"><b>รหัสผ่านอีกครั้ง</b></label>
                        <input type="password" name="psw-repeat" required />
                        <hr />
                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
