import React from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";



// import {
//     faYoutube,
//     faFacebook,
//     faTwitter,
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
// import { ProductConsumer } from "../context";

export default function Footer() {
  return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row footer">
                <div className="col-md-6 paragraph social-container">
                  <p className="text-capitalize">
                    Copyright &copy; Free Namak {new Date().getFullYear()}. Open Source Project.{" "}
                  </p>
                  <a href ="https://www.instagram.com/himalayansaltlife" target = "_blank" rel="noopener noreferrer"><FiInstagram/></a>
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
    // </ProductConsumer>

}

const FooterWrapper = styled.footer`
  // background: var(--darkGrey);
  color: red;
  .icon {
    font-size: 1.5rem;
    color: red;
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
   .paragraph {
       text-align: center;

   }
   .footer {
    padding: 5em;
    // background-color: black;
    color:red!important;
    }

   .footer a {
     color: red;
   }

   }
`;
