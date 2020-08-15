import React from "react";
import styled from "styled-components";
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
              <div className="row">
                <div className="col-md-6 paragraph">
                  <p className="text-capitalize">
                    copyright &copy; Namak {new Date().getFullYear()}. Open Source Project. Share The Knowledge {" "}
                  </p>
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
    // </ProductConsumer>

}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
   .paragraph {
       text-align: center;
   }
`;
