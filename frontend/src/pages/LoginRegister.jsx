import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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

      res.data.user.role === "admin"
        ? navigate("/admin/home")
        : navigate("/user/home");

    } catch (err) {
      alert("Erreur dans les informations");
    }
  };

  return (
    <>
      <Navbar />

      <div className="hero-section">

        {/* LEFT */}
        <div className="hero-text">
          <h1>Vendez et achetez votre voiture facilement</h1>
          <p>
            Plateforme moderne pour l’achat et la vente de voitures au Maroc
          </p>

          {/* FORM تحت النص */}
          <div className="auth-under-text">
            <div className="auth-box card">

              <div className="auth-tabs">
                <button
                  type="button"
                  className={isLogin ? "active" : ""}
                  onClick={() => setIsLogin(true)}
                >
                  Connexion
                </button>
                <button
                  type="button"
                  className={!isLogin ? "active" : ""}
                  onClick={() => setIsLogin(false)}
                >
                  Créer un compte
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <input
                      className="input"
                      name="name"
                      placeholder="Nom complet"
                      onChange={handleChange}
                    />
                    <input
                      className="input"
                      name="phone"
                      placeholder="Téléphone"
                      onChange={handleChange}
                    />
                    <input
                      className="input"
                      name="address"
                      placeholder="Ville"
                      onChange={handleChange}
                    />
                  </>
                )}

                <input
                  className="input"
                  name="email"
                  placeholder="Adresse e-mail"
                  onChange={handleChange}
                />

                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChange}
                />

                {!isLogin && (
                  <input
                    className="input"
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmer le mot de passe"
                    onChange={handleChange}
                  />
                )}

                <button className="btn btn-orange" type="submit">
                  {isLogin ? "Se connecter" : "S’inscrire"}
                </button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
