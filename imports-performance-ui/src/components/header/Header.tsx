import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import HeaderProps from "../../types/props/header/HeaderProps";
import { useNavigate } from "react-router-dom";
import { logout } from '../../api/services/logout'

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const redirectTo = (path: string) => {
    navigate(path);
  };

  const sendLogout = async () => {
    if (isAuthenticated) {
      const response = await logout();
      if (response.success && response.status === 204) {
        window.location.href = '/';
        return;
      }

      if (!response.success || response.status !== 204) {
        window.location.href = '/auth/login';
      }
    }
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo Imports Performance" />
      {!isAuthenticated && (
        <>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/#about-us">Sobre</a>
              </li>
              <li className="nav-item">
                <a href="/services">Serviços</a>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              redirectTo('/auth/login');
            }}
            className="btn-login"
          >
            Entrar
          </button>
        </>
      )}
      {isAuthenticated && (
        <>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/services">Serviços</a>
              </li>
              <li className="nav-item">
                <a href="/auto-parts">Peças</a>
              </li>
              <li className="nav-item">
                <a href="/payments">Pagamentos</a>
              </li>
            </ul>
          </nav>
          <button onClick={() => sendLogout()} className="btn-login">Sair</button>
        </>
      )}
    </header>
  );
};

export default Header;
