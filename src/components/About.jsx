import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import aboutHeadingImg from "../assets/img/aboutHeadingImg.png";
import aboutBg from "../assets/img/aboutBg.png";
import aboutTree from "../assets/img/aboutTree.png";
export default function About() {
    const title = "What is <br> hipster owl";
    const desc1 = "This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation​to buy or sell any token or other product. Purchasing and selling tokens is inherently risky, and holders​ must bear the risk of loss. ";
    const desc2 = "Neither the authors of this website nor any participants in the $HIPS project accept any liability for losses or taxes that holders, purchasers or sellers of $HIPS may​ incur.";
    const desc3 = "The value of $HIPS may decrease and may be highly volatile. This website is not directed​ toward any person located in a jurisdiction where purchasing, selling or holding $HIPS is​ prohibited or regulated. Consult your local laws before transacting in any cryptocurrency.";
  return (
    <section className='about-area'>
        <figure className='aboutbgShap'>
            <img src={aboutBg} alt="" />
        </figure>
        <figure className='aboutTree'>
            <img src={aboutTree} alt="" />
        </figure>
        <Container>
            <Row>
                <Col lg={8}>
                    <div className="about-content">
                        <div className="about-heading">
                            <figure>
                                <img src={aboutHeadingImg} alt="" />
                            </figure>
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        </div>
                        <p>{desc1}</p>
                        <p>{desc2}</p>
                        <p>{desc3}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
