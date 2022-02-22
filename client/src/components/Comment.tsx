import React from "react";

function Comment() {
    return (
        <section className="comment">
            <div className="comment-board-container">
                <div className="comment-created-container">
                    <div className="comment-created-user-box">
                        <div className="comment-created_icon" />
                        <div className="comment-created">포켓몬마스터</div>
                    </div>
                    <div className="comment-created">2022.02.20</div>
                </div>
                <div className="comment-content">오...</div>
            </div>
            <div className="comment-input-container">
                <input className="comment-input" />
                <div className="comment-button-container">
                    <button className="comment-button">댓글 쓰기</button>
                    <button className="comment-button">댓글 쓰기 + 추천</button>
                    <button className="comment-button">비추천</button>
                </div>
            </div>
        </section>
    );
}

export default Comment;
