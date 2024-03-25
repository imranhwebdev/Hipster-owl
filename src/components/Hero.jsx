import {React, useEffect} from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import social1 from "../assets/img/socials/social1.svg";
import social2 from "../assets/img/socials/social2.svg";
import social3 from "../assets/img/socials/social3.svg";
import headingImg1 from "../assets/img/headingImg1.png";
import headingImg2 from "../assets/img/headingImg2.png";
import heroBg from "../assets/img/heroBg.png";
import CopyToClipboard from './CopyToClipboard';
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const title = "Hipster Owl";
  const desc = "$HIPS token is a memecoin with no intrinsic value, and is not an investment. It’s simply a community/culture token similar to $pepe. No Promises, No Utility, Purely For Entertainment Purposes"
  const btnUrl1 = "https://jup.ag/swap/SOL-HIPS_736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE";
  const btnTxt1 = "Buy Jupiter";
  const btnUrl2 = "https://raydium.io/swap/?outputCurrency=736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE";
  const btnTxt2 = "Buy Raydium";
  const socials = [
    {
      icon:social1,
      url: "https://solscan.io/token/736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE",
    },
    {
      icon:social2,
      url: "https://dexscreener.com/solana/29s4hdvxpsunkdoevbq3mgu7dazpy7ayf4docklp8wqh",
    },
    {
      icon:social3,
      url: "https://www.dextools.io/app/en/solana/pair-explorer/29S4HdvXPsunkDoeVBq3Mgu7DAzPy7AYF4DockLp8WQH?t=1711273325438",
    },
  ];
  const copyTitle = "Our SOL CA:";
  return (
    <section className='hero-area'>
      <figure className='hero-Bg'>
        <img src={heroBg} alt="" />
      </figure>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="hero-content">
              <div className='heading'>
                <figure className='heading-img1'>
                <img src={headingImg1} alt="" />
                </figure>
                <h1 data-aos="zoom-in" data-aos-duration="1000">{title}</h1>
                <figure className='heading-img2'>
                  <img src={headingImg2} alt="" />
                </figure>
              </div>
              <p data-aos="zoom-in" data-aos-duration="1200">{desc}</p>
              <div className='d-sm-flex align-items-center'>
                <div className="btns" data-aos="zoom-in" data-aos-duration="1600">
                  <a href={btnUrl1} target='_blank' className='boxed-btn'>{btnTxt1}</a>
                  <a href={btnUrl2} target='_blank' className='boxed-btn'>{btnTxt2}</a>
                </div>
                <ul className="socials mt-4 mt-sm-0" data-aos="zoom-in" data-aos-duration="1500">
                  {socials.map((item, index)=>(
                    <li key={index}><a href={item.url} target='_blank'><img src={item.icon} alt="" /></a></li>
                  ))}
                </ul>
              </div>
              <div className="copy" data-aos="zoom-in" data-aos-duration="1600" data-aos-offset="0">
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
