import {React, useEffect} from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPaperPlane, FaTwitter } from "react-icons/fa";
import footerlogo from "../assets/img/footer-logo.svg"
import footerBg from "../assets/img/footer-BG.png"
export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const title = "Contact us";
  const socials = [
    {
      icon:<FaPaperPlane />,
      url: "https://t.me/HipsterOwlChat",
    },
    {
      icon:<FaTwitter />,
      url: "https://twitter.com/HipsterOwlCoin",
    },
  ];
  const btnUrl1 = "https://jup.ag/swap/SOL-HIPS_736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE";
  const btnTxt1 = "Buy Jupiter";
  const btnUrl2 = "https://raydium.io/swap/?outputCurrency=736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE";
  const btnTxt2 = "Buy Raydium";
  return (
    <footer className='footer-area'>
      <figure className='footerBg'>
        <img src={footerBg} alt="" />
      </figure>
      <Container>
        <Row> 
          <Col className='text-center'>
            <div className="section-title">
              <h2 data-aos="zoom-in" data-aos-duration="1000">{title}</h2>
            </div>
            <div className="socials" data-aos="zoom-in" data-aos-duration="1000">
                {socials.map((item, index)=>(
                  <a href={item.url} target='_blank' key={index}>{item.icon}</a>
                ))}
              </div>
            <div className="btns" data-aos="zoom-in" data-aos-duration="1000">
                <a href={btnUrl1} target='_blank' className='boxed-btn'>{btnTxt1}</a>
                <a href={btnUrl2} target='_blank' className='boxed-btn'>{btnTxt2}</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-content text-center">
                <a href="#" className='logo'>
                    <img src={footerlogo} alt="" />
                </a>
                <p>$HIPS token is a memecoin with no intrinsic value, and is not an investment. It’s simply a community/<br/> culture token similar to $pepe. No Promises, No Utility, Purely For Entertainment Purposes</p>
                <p className='copyright'>&copy; HIPSTER OWL {new Date().getFullYear()} - All Rights Reserved </p>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
