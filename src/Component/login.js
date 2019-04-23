import React, { Component } from 'react';
import Header from './Header';


class Login extends Component {
    render() {
        return (
            <div> <Header />
                <div className="conrainer-fluid">
                    <div className="wrapper">
                        <form className="form-signin">
                            <h2 className="form-signin-heading">ลงชื่อเข้าใช้</h2>
                            <input type="text" className="form-control" name="username" placeholder="Email or Student ID" required autofocus />
                            <input type="password" className="form-control" name="password" placeholder="Password" required />
                            <label className="checkbox">
                                <input type="checkbox" defaultValue="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">ลงชื่อเข้าใจ</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
