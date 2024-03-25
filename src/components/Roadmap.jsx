import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import roadMapimg1 from '../assets/img/roadmapImg1.png';
import roadMapimg2 from '../assets/img/roadmapImg2.png';
import roadmapTree from '../assets/img/roadmapImg.png';
export default function Roadmap() {
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
                <div className="section-title text-center">
                    <h2>{title}</h2>
                </div>
            </Col>
        </Row>
        <Row className='roadmap-wrapper'>
            <figure className='roadMapimg1'>
                <img src={roadMapimg1} alt="" />
            </figure>
            {roadmapItems.map((item, index)=>(
                <Col md={4} key={index}>
                    <div className="roadmap-item">
                        <span>{item.phase}</span>
                        <h4>{item.title}</h4>
                    </div>
                </Col>
            ))}
            <figure className='roadMapimg2'>
                <img src={roadMapimg2} alt="" />
            </figure>
        </Row>
      </Container>
      <figure className='roadmapTree'>
        <img src={roadmapTree} alt="" />
      </figure>
    </section>
  )
}
