import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { verifyUser } from "../../Data/user";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    // เคลียหน้าใส่ข้อมูล
    userRef.current.value = "";
    passRef.current.value = "";

    const userInfo = verifyUser(user, pass);
    // เมื่อกดผิดให้...
    if (userInfo === null) {
      // แสดงข้อความ alert
      alert("Invalid username or password");
      // เปลี่ยน focus มาที่ช่องใส่ username
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container">
      {/* Form Username */}
      <Form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
      >
        <Form.Label htmlFor="username" className="text-light">
          Username
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="Username คือ user"
          style={{ textAlign: "center" }}
          ref={userRef}
        />

        {/* Form Password */}
        <Form.Label htmlFor="password" className="text-light">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="รหัสคือ pass"
          style={{ textAlign: "center" }}
          ref={passRef}
        />

        <button className="btn btn-success mt-3" onClick={handleLogin}>
          Login
        </button>
      </Form>
    </div>
  );
}

export default Login;
