import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import howtobuyItemImg from "../assets/img/howtobuyItemImg.png";
import howtobuytopLeftImg from "../assets/img/howtobuyTree.png";
import howtobuybottomImg from "../assets/img/howtobuybottomImg.png";
export default function HowToBuy() {
    const title = "hOW TO BUY";
    const howtobuyItems = [
        {
            img: howtobuyItemImg,
            title: "cREATE A WALLET",
            desc: "Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users"
        },
        {
            img: howtobuyItemImg,
            title: "Get sOME SOL",
            desc: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io"
        },
        {
            img: howtobuyItemImg,
            title: "GO TO RAYDIUM,JUPITER",
            desc: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io"
        },
        {
            img: howtobuyItemImg,
            title: "SWITCH SOL FOR SOLOMA",
            desc: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io"
        },
    ]
  return (
    <section className='howtobuy-area'>
    <figure className='howtobuytopLeftImg'>
        <img src={howtobuytopLeftImg} alt="" />
    </figure>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center">
                    <h2>{title}</h2>
                </div>
            </Col>
        </Row>
        <Row className='howtobuy-wrapper row-gap-4'>
            {howtobuyItems.map((item, index)=>(
                <Col md={6} key={index}>
                    <div className="howtobuy-singleItem">
                        <figure className='howtobuyitemImg'>
                            <img src={item.img} alt="" />
                        </figure>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                </Col>
            ))}
        </Row>
      </Container>
    <figure className='howtobuybottomImg'>
        <img src={howtobuybottomImg} alt="" />
    </figure>
    </section>
  )
}
