/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contáctenos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Ubicación</h6>
                    <p>
                      Barva, costado sur de la iglesia, LOCALES TITA, Local #4,
                      Heredia, Costa Rica, 40201
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Correos</h6>
                    <p>sdelgado@h-deq.com</p>
                    <p>ventas@hdeq.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfonos</h6>
                    <p>+506 88402755</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>¿Quieres más información?</h5>
              </div>
              <ul>
                <li>
                  <div className="subscribe">
                    <input
                      type="text"
                      placeholder="Deja tu correo electrónico"
                    />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <p>Síguenos en:</p>
              <div className="social">
                <Link href="https://www.facebook.com/p/H-DEQ-Dise%C3%B1o-Equilibrio-100042048768445">
                  <a target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/h_deq">
                  <a target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, H-DEQ. <br />
                  Sitio Web creado por
                  <Link href="https://www.instagram.com/korbcr">
                    <a target="_blank"> Korb Software Solutions </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
