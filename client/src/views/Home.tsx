import React from "react";
import Slider from "react-slick";
import MainBoard from "../components/MainBoard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <section className="home">
            <h2>광고나 이벤트</h2>
            <article className="main-notice-container">
                <Slider {...settings}>
                    <div className="list-style default">
                        <div className="thumb-box">이미지 배너</div>
                    </div>
                    <div className="list-style default">
                        <div className="thumb-box">이미지 배너</div>
                    </div>
                </Slider>
            </article>
            <main className="main-board-container">
                <MainBoard />
                <MainBoard />
            </main>
        </section>
    );
}

export default Home;
