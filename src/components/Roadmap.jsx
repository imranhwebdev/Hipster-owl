import {React, useEffect} from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import roadMapimg1 from '../assets/img/roadmapImg1.png';
import roadMapimg2 from '../assets/img/roadmapImg2.png';
import roadmapTree from '../assets/img/roadmapImg.png';
export default function Roadmap() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const title = "THE ROADMAP TO THE HIPSTER OWL";
    const roadmapItems = [
        {
            phase: "Phase 1:",
            title: "Meme",
        },
        {
            phase: "Phase 2:",
            title: "Vibe and HODL",
        },
        {
            phase: "Phase 3:",
            title: "Meme Takeover",
        },
    ]
  return (
    <section className='roadmap-area'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={8}>
                <div className="section-title text-center"  data-aos="zoom-in" data-aos-duration="1200">
                    <h2>{title}</h2>
                </div>
            </Col>
        </Row>
        <Row className='roadmap-wrapper'>
            <figure className='roadMapimg1' data-aos="zoom-in" data-aos-duration="1400">
                <img src={roadMapimg1} alt="" />
            </figure>
            {roadmapItems.map((item, index)=>(
                <Col md={4} key={index}>
                    <div className="roadmap-item"  data-aos="zoom-in" data-aos-duration="1200">
                        <span>{item.phase}</span>
                        <h4>{item.title}</h4>
                    </div>
                </Col>
            ))}
            <figure className='roadMapimg2'  data-aos="zoom-in" data-aos-duration="1400">
                <img src={roadMapimg2} alt="" />
            </figure>
        </Row>
      </Container>
      <figure className='roadmapTree' data-aos="zoom-in-left" data-aos-duration="1200">
        <img src={roadmapTree} alt="" />
      </figure>
    </section>
  )
}
