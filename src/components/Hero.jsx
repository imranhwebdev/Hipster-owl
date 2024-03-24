import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import social1 from "../assets/img/socials/social1.svg";
import social2 from "../assets/img/socials/social2.svg";
import social3 from "../assets/img/socials/social3.svg";
import CopyToClipboard from './CopyToClipboard';
export default function Hero() {
  const title = "Hipster Owl";
  const desc = "Hey there! Welcome to HIPSTER OWL, your new favorite memecoin. Why HIPSTER OWL? Because one fine day, Elon Musk, with his kiddo hanging out with him, hinted that Tesla might just hop on the memecoin train."
  const btnUrl1 = "https://google.com";
  const btnTxt1 = "Buy Jupiter";
  const btnUrl2 = "https://google.com";
  const btnTxt2 = "Buy Raydium";
  const socials = [
    {
      icon:social1,
      url: "https://google.com",
    },
    {
      icon:social2,
      url: "https://google.com",
    },
    {
      icon:social3,
      url: "https://google.com",
    },
  ];
  const copyTitle = "Our SOL CA:";
  return (
    <section className='hero-area'>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="hero-content">
              <h1>{title}</h1>
              <p>{desc}</p>
              <div className='d-flex align-items-center'>
                <div className="btns">
                  <a href={btnUrl1} className='boxed-btn'>{btnTxt1}</a>
                  <a href={btnUrl2} className='boxed-btn'>{btnTxt2}</a>
                </div>
                <ul className="socials">
                  {socials.map((item, index)=>(
                    <li key={index}><a href={item.url}><img src={item.icon} alt="" /></a></li>
                  ))}
                </ul>
              </div>
              <div className="copy">
                <h5>{copyTitle}</h5>
                <CopyToClipboard />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
