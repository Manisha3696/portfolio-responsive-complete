import type React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import pooja1 from '../../../assets/images/pooja/bell.jpg';
const Checkout: React.FC = () => {
  const slidesData = [
    { imgSrc: pooja1, title: 'Drink Fruits',category: 'Rice' },
    { imgSrc: pooja1, title: 'Fresh Fruit',category: 'Rice' },
    { imgSrc: pooja1, title: 'Dried Fruit',category: 'Rice' },
    { imgSrc: pooja1, title: 'Juices',category: 'Rice' },
    { imgSrc: pooja1, title: 'Vegetables',category: 'Rice' },
    { imgSrc: pooja1, title: 'Herbs',category: 'Rice' },
];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  return (
    <>
      <Header />
      {/* Single Page Header start */}
      <div className="container-fluid pooja-banner py-5">
        <h1 className="text-center text-white display-6">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/index.html#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Checkout</li>
        </ol>
      </div>

      {/* Intro Section */}
      <div className='container'>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
              POOJA PRODUCT EXPORT FROM INDIA
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
              Koogul Industries Pooja Products encompass a range of meticulously crafted items that are essential for performing rituals and ceremonies. These products are designed to enhance the spiritual experience and create an atmosphere of devotion and reverence. Our Pooja Products offer a wide variety of items, including ghee diya, sambrani cups, chandan tika, camphor, kapoor, hawan samagri, puja oils, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="swiper-container">
        <div className='cotainer'>
            <Swiper
                slidesPerView={4}
                loop={true}
                navigation={{
                    nextEl: '.next-button',
                    prevEl: '.prev-button'
                }}
                allowTouchMove={false} // optional: disable swipe gestures
                modules={[Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    374: { slidesPerView: 1 },
                    424: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide >
                    <div className="card border-danger h-100">
                        <div className="position-relative">
                            <img 
                                src={slide.imgSrc} 
                                alt={slide.title} 
                                className="card-img-top"
                                style={{ height: '190px', objectFit: 'cover' }}
                            />
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                                {slide.category}
                            </span>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">{slide.title}</h5>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
            {/* Navigation Buttons */}
            <button className="prev-button">❮</button>
            <button className="next-button">❯</button>
            </div>

      <Footer />
    </>
  );
}

export default Checkout;
