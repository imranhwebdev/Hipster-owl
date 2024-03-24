import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import aboutHeadingImg from "../assets/img/aboutHeadingImg.png";
import aboutBg from "../assets/img/aboutBg.png";
import aboutTree from "../assets/img/aboutTree.png";
export default function About() {
    const title = "What is <br> hipster owl";
    const desc1 = "We're here to keep the good vibes of HIPSTER OWL going, but with a fresh twist. HIPSTER is all about the laughs, the community, and maybe a little bit of that crypto magic.";
    const desc2 = "It's easy, it's fun, and hey, who says you can't dream about paying for cool stuff with a coin that started as a joke? Join the HIPSTER OWL crew and let's see where this rocket goes!";
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
                <Col lg={6}>
                    <div className="about-content">
                        <div className="about-heading">
                            <figure>
                                <img src={aboutHeadingImg} alt="" />
                            </figure>
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        </div>
                        <p>{desc1}</p>
                        <p>{desc2}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
