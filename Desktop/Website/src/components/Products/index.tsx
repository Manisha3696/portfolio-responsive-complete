import type React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FruitsShop from './FruitsShop'
import SinglePageHeader from './SinglePageHeader'
import { useEffect, useRef, useState } from 'react'
// import Single from '../Single'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About from '../../assets/images/KG.jpg'
import RiceBanner from '../../assets/images/Rice-Bundle.jpg'
import PoojaBanner from '../../assets/images/Pooja-Set.jpg'
import FlowerBanner from '../../assets/images/Jasmine-banner.jpg'
import useCountAnimation from '../../../src/useCountAnimation'
import AOS from "aos";
import "aos/dist/aos.css";

const Products: React.FC = () => 
  {

    const branches = useCountAnimation(2);
    const years = useCountAnimation(18);
    const shippings = useCountAnimation(100);
    const customers = useCountAnimation(1000);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (sectionRef.current) {
          const { top } = sectionRef.current.getBoundingClientRect();
          if (top < window.innerHeight * 0.75) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        branches.setStart(true);
        years.setStart(true);
        shippings.setStart(true);
        customers.setStart(true);
      }
    }, [isVisible]);
  
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
       
      });
    }, []);
    return (

      <>
        <Header />
        {/* Single Page Header start */}
        {/* <Single name="About" title="About" /> */}
        <SinglePageHeader/>
        <Container className='mt-5 mb-5' data-aos="fade-up">
          <Row className='justify-content-between'>
            <Col xs={12} lg={6}>
              <Image src={About} alt='About.png' className='img-fluid rounded' style={{ height: "-webkit-fill-available" }} />
            </Col>
            <Col xs={12} lg={6} className='px-5'>
              <h1 className='text-center mt-4 mb-4' style={{ color: "#D21215" }}>WELCOME TO <br /> KOOGUL INDUSTRIES</h1>
              <p style={{ textAlign: "justify" }}>
                Established in 2013 as a family-owned import/export business, <b>Koogul Industries</b> has grown into one of Melbourne’s leading importers. With a vast network of warehouses and a team of industry experts, we cater to both consumer and commercial clients, ensuring excellence in every transaction.
              </p>
              <p style={{ textAlign: "justify" }}>
                Driven by a vision to achieve global recognition, we are committed to delivering superior service and fostering long-term customer relationships. Our dedication to quality and reliability continues to set us apart in the industry.
              </p>
  
            </Col>
          </Row>
        </Container>
  
        <Container className='' style={{ margin: "100px auto" }}>
          <h1 className='text-center mt-5 mb-5'>OUR SERVICES</h1>
          <Row className='mt-5 mb-5' id='row'>
            <Col xs={12} lg={9} className='px-5' data-aos="fade-up">
              <h4 className='text-start mt-4 mb-4' id='textCenter'>FLOWERS</h4>
              <p>We specialize in the import and export of high-quality <b>Flowers,</b> ensuring freshness and superior standards at every stage. Sourced from the finest growers worldwide, our flowers cater to various occasions, from weddings and celebrations to large-scale commercial needs. With a strong supply chain and seamless logistics, we deliver vibrant and long-lasting flowers to global markets, making us a trusted name in the floral trade.</p>
            </Col>
            <Col xs={12} lg={3}>
              <Image id='services' data-aos="zoom-in-up" src={FlowerBanner} alt='flowerBanner.png' className='img-fluid rounded' style={{ maxWidth: "100%", height: "250px" }} />
            </Col>
          </Row>
          <Row className='mt-5 mb-5'>
            <Col xs={12} lg={3}>
              <Image id='services' data-aos="zoom-in-up" src={PoojaBanner} alt='poojaBanner.png' className='img-fluid rounded' style={{ maxWidth: "100%", height: "250px" }} />
            </Col>
            <Col xs={12} lg={9} className='px-5' data-aos="fade-up">
              <h4 className='text-start mt-4 mb-4' id='textCenter'>POOJA PRODUCTS</h4>
              <p>We take pride in offering a diverse range of premium <b>Pooja products,</b> carefully sourced and crafted to uphold spiritual traditions. From sacred flowers and leaves to brassware and herbal essentials, our products cater to religious ceremonies, temples, and personal rituals. With a commitment to quality and authenticity, we ensure that every offering embodies purity and devotion, making us a trusted partner in spiritual and cultural practices worldwide.</p>
            </Col>
          </Row>
          <Row className='mt-5 mb-5' id='row'>
            <Col xs={12} lg={9} className='px-5' data-aos="fade-up">
              <h4 className='text-start mt-4 mb-4' id='textCenter'>RICE</h4>
              <p>We specialize in the export and distribution of premium-quality <b>Rice,</b> sourced from the finest farms to meet global standards. Our carefully selected varieties, including basmati, non-basmati, and organic rice, ensure superior taste, texture, and nutritional value. With a focus on purity, freshness, and sustainable sourcing, we deliver high-quality rice for households, restaurants, and commercial needs worldwide, making us a trusted name in the industry.</p>
            </Col>
            <Col xs={12} lg={3}>
              <Image id='services' data-aos="zoom-in-up" src={RiceBanner} alt='riceBanner.png' className='img-fluid rounded' style={{ maxWidth: "100%", height: "250px" }} />
            </Col>
          </Row>
        </Container>
  
        <Row
          id='flight-bg'
          data-aos="fade-up"
          style={{
            backgroundImage: `url(https://skantrans.ie/wp-content/uploads/2017/04/Air-Freight.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 0",
            textAlign: "center",
            color: "black"
          }}
        >
          <Row>
            <Col ref={sectionRef} id='branch-col'>
              {isVisible && (
                <>
                  <Row>
                    <Col md={6}>
                      <h2>{branches.count}+</h2>
                      <p>Branches</p>
                    </Col>
                    <Col md={6}>
                      <h2>{years.count}+</h2>
                      <p>Years</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <h2>{shippings.count}+</h2>
                      <p>Shippings</p>
                    </Col>
                    <Col md={6}>
                      <h2>{customers.count}+</h2>
                      <p>Happy Customers</p>
                    </Col>
                  </Row>
                </>
              )}
            </Col>
            <Col></Col>
          </Row>
        </Row>
  
        <Container className='' style={{ margin: "100px auto" }}>
          <Row>
            <Col xs={12} lg={6}>
              <Image data-aos="zoom-out-up" src={About} alt='About.png' className='img-fluid rounded' />
            </Col>
            <Col xs={12} lg={6} className='px-5' data-aos="fade-up">
              <h5 className='text-start mt-3 mb-3' style={{ color: "#D21215" }}>WHY CHOOSE US</h5>
              <h1 className='text-start mt-3 mb-3'>UNMATCHED QUALITY</h1>
              <p className='mt-2 mb-2'>We source our flowers from the best local and international growers, ensuring that every bouquet is fresh, vibrant, and long-lasting.</p>
              <div className='mt-4'>
                <h6 className='mt-3 mb-3'>FRESHNESS AND LONGEVITY</h6>
                <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                  <div
                    className="progress-bar text-end px-5"
                    role="progressbar"
                    style={{ width: "91%" }}
                    aria-valuenow={91}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >91%</div>
                </div>
                <h6 className='mt-3 mb-3'>WORLDWIDE SHIPPING</h6>
                <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                  <div
                    className="progress-bar text-end px-5"
                    role="progressbar"
                    style={{ width: "82%" }}
                    aria-valuenow={82}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >82%</div>
                </div>
                <h6 className='mt-3 mb-3'>DEDICATED SUPPORT</h6>
                <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                  <div
                    className="progress-bar text-end px-5"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >95%</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
  
        <Footer />
      </>
    )
  }
  
  
export default Products
