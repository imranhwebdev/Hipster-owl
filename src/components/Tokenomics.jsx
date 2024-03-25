import {React, useEffect} from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
export default function Tokenomics() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const title = "Tokenomics";
    const desc = "Founders like you. they buy they sale their Dogewifhat 2.0";
    const singleItems = [
        {
            title: "Free Airdrop (50M)",
            value: "10%",
        },
        {
            title: "Marketing, Team and Future Airdrops (100M)",
            value: "20%",
        },
        {
            title: "Liquidity Pool (350M)",
            value: "70%",
        },
        {
            title: "Burned at launch",
            value: "20%",
        },
        {
            desc: "Ownership revoked"
        },
        {
            desc: "Immutable"
        },
        {
            desc: "Revoked Mint Authority"
        },
        {
            desc: "Revoked Freeze Authority"
        },
    ];

    const tokenTitle1 = "In Circulation";
    const tokenTitle2 = "Supply";
    const value1 = "80%";
    const value2 = "500 M";
  return (
    <section className='tokenomicsArea'>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center">
                    <h2  data-aos="zoom-in" data-aos-duration="1000">{title}</h2>
                    <p  data-aos="zoom-in" data-aos-duration="1200">{desc}</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="tokenDetails">
                    <div className="singleItem-wrapper">
                        {singleItems.map((singleItem, index) => (
                            <div className="singleItem" key={index}   data-aos="zoom-in" data-aos-duration="1400">
                                {singleItem.desc ? (
                                    <p className='desc text-center'>{singleItem.desc}</p>
                                    ) : (
                                        <div className="singleItemContent">
                                            <div className='top d-flex align-items-center justify-content-between'>
                                                <h5>{singleItem.title}</h5>
                                            </div>
                                            <div className='bottom'>
                                                <span>{singleItem.value}</span>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                    <div className="singleItem d-flex large"   data-aos="zoom-in" data-aos-duration="1200">
                        <h5>{tokenTitle1}</h5>
                        <span>{value2}</span>
                    </div> 
                    <div className="singleItem large d-flex align-items-center align-items-center"   data-aos="zoom-in" data-aos-duration="1400">
                        <h5>{tokenTitle2}</h5>
                        <span>{value2}</span>
                    </div>  
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
