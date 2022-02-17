import React from "react";

function PostList() {
    return (
        <div className="board-menu-box">
            <h4 className="board-menu-title">제목칸 입니다</h4>
            <div className="board-menu-detail-box">
                <div className="board-menu-contents-box">
                    <div className="board-menu-icon" />
                    <div className="board-menu-text">3</div>
                </div>
                <div className="board-menu-contents-box">
                    <div className="board-menu-icon" />
                    <div className="board-menu-text">4분전</div>
                </div>
                <div className="board-menu-user-box">
                    <div className="board-menu-icon" />
                    <div className="board-menu-text">김코딩</div>
                </div>
            </div>
        </div>
    );
}

export default PostList;
