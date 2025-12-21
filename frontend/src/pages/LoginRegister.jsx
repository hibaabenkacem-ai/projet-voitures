import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (isLogin) {
        res = await API.post("/login", {
          email: form.email,
          password: form.password,
        });
      } else {
        res = await API.post("/register", form);
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin")
        navigate("/admin/home");
      else
        navigate("/user/home");

    } catch (err) {
      console.log(err);
      alert("Erreur: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="phone" placeholder="Phone" onChange={handleChange} required />
            <input name="address" placeholder="Address" onChange={handleChange} />
            <input name="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} required />
          </>
        )}
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create new account" : "Already have account? Login"}
      </button>
    </div>
  );
}
