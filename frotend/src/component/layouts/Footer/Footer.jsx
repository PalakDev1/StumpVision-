import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GooglePlay from "../../../Image/Footer/google-play-black.svg";
import AppStore from "../../../Image/Footer/app-store-black.svg";
import "./Footer.css";
const footMenu = [
  {
    id: 1,
    title: "Help",
    menu: [
      {
        id: 1,
        link: "Track Order",
        path: "/orders",
      },
      {
        id: 2,
        link: "FAQs",
        path: "/terms/conditions",
      },

      {
        id: 3,
        link: "Cancel Order",
        path: "/policy/return",
      },
      {
        id: 4,
        link: "Return Order",
        path: "/policy/return",
      },
      {
        id: 5,
        link: "Warranty Info",
        path: "/policy/Terms",
      },
    ],
  },
  {
    id: 2,
    title: "Policies",
    menu: [
      {
        id: 1,
        link: "Return Policy",
        path: "/policy/return",
      },
      {
        id: 2,
        link: "Security",
        path: "/policy/privacy",
      },
      {
        id: 3,
        link: "Sitemap",
        path: "/policy/Terms",
      },
      {
        id: 4,
        link: "Privacy Policy",
        path: "/policy/privacy",
      },
      {
        id: 5,
        link: "T&C",
        path: "/terms/conditions",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    menu: [
      {
        id: 1,
        link: "About Us",
        path: "/about",
      },
      {
        id: 2,
        link: "Contact Us",
        path: "/contact",
      },
      {
        id: 3,
        link: "Service Centres",
        path: "/",
      },
      {
        id: 4,
        link: "Careers",
        path: "/",
      },
      {
        id: 5,
        link: "Affiliates",
        path: "/terms/conditions",
      },
    ],
  },
];

 



const Footer = () => {
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thankyou, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="wrapper_footer footer_wrapper ">
            <div className="foot_about foot1">
              <div className="foot_logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img
                    src={require("../../../Image/Footer/logo.png")}
                    alt="cricekt weapon logo"
                  />
                  <h1 className="Foot_heading">Cricket Weapon</h1>
                </Link>
              </div>

              <div className="foot_subs">
                <h5>Newslatter</h5>
                <form onSubmit={handleSubmit} className="foot_form">
                  <input
                    type="email"
                    className="input_field_footer"
                    placeholder="Email Address*"
                    required
                    value={subValue}
                    onChange={(e) => setSubValue(e.target.value)}
                  />
                  <p>
                    By submitting your email address you agree to the{" "}
                    <Link to="/terms/conditions" className="foot_subs_text">
                      Terms & Conditions
                    </Link>
                  </p>
                  <button type="submit" className="btnFooter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div class="foot_menu_container">
              {footMenu.map((item) => {
                const { id, title, menu } = item;
                return (
                  <div class="foot_menu foot2" key={id}>
                    <h4>{title}</h4>
                    <ul>
                      {menu.map((item) => {
                        const { id, link, path } = item;
                        return (
                          <li key={id}>
                            <Link to={path}>{link}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="foot_links foot3">
              <div className="foot_dowload_appLink">
                <h5>Download app</h5>
                <div className="app_links">
                  <span className="googlePlayStore_link">
                    <a href="/">
                      <img src={GooglePlay} alt="play Store svg" />
                    </a>
                  </span>
                  <span className="appleStore_link">
                    <a href="/">
                      <img src={AppStore} alt="Apple Store svg" />
                    </a>
                  </span>
                </div>
              </div>
              {/* socila media link */}
            </div>
          </div>
        </div>

        <div className="separatorFooter"></div>

        <div className="sub_footer_root">
          <div className="container_Footer">
            <div className="sub_footer_wrapper">
              <div className="foot_policyLink">
                <ul>
                  <li className="subfoot_link_text1">
                    <Link to="/policy/privacy">
                      <p className="foot_policyLink_p">Privacy Policy</p>
                    </Link>
                  </li>
                  <li className="subfoot_link_text2">
                    <Link to="/terms/conditions">
                      <p className="foot_policyLink_p">TERMS & CONDITIONS</p>
                    </Link>
                  </li>
                  <li className="subfoot_link_text3">
                    <Link to="/policy/Terms">
                      <p className="foot_policyLink_p">TERMS OF USE</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="foot_copyright">
                <p>
                  &copy; {currYear} | Cricket weapon, All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
