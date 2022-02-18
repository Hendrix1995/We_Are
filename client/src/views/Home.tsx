import React from "react";
import Slider from "react-slick";
import MainBoard from "../components/MainBoard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface postsProps {
    dummyData: {
        id: number;
        title: string;
        content: string;
        suggestion: number;
        created_by: string;
        created_at: string;
    }[];
}

function Home({ dummyData }: postsProps) {
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
                <MainBoard dummyData={dummyData} />
                <MainBoard dummyData={dummyData} />
            </main>
        </section>
    );
}

export default Home;
