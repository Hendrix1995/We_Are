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
    };

    return (
        <section className="home">
            <h2>광고나 이벤트</h2>
            <article className="main-notice-container">
                <Slider {...settings}>
                    <div className="list-style default">
                        <div className="thumb-box">앵간하면 이미지로 하자!</div>
                    </div>
                    <div className="list-style default">
                        <div className="thumb-box">앵간하면 이미지로 하자!</div>
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
