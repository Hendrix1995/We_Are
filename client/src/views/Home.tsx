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
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    return (
        <section className="home-container">
            <h2>Today?</h2>
            <article className="today-container">
                <Slider {...settings}>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
                    </div>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
                    </div>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
                    </div>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
                    </div>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
                    </div>
                    <div className="today-box">
                        <h3>뭔가 만들고 있다...!</h3>
                        <div className="today-content-box">
                            <div className="today-thumbnail" />
                            <div>뭔가 만들고는 있는데 도대체 뭔지 모르겠다!!</div>
                        </div>
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
