import React from "react";
import dummyData from "../static/dummyData";

function PostList() {
    return (
        <>
            {dummyData.map((post) => (
                <div className="board-menu-box">
                    <h4 className="board-menu-title">{post.title}</h4>
                    <div className="board-menu-detail-box">
                        <div className="board-menu-contents-box">
                            <div className="board-menu-icon" />
                            <div className="board-menu-text">{post.suggestion}</div>
                        </div>
                        <div className="board-menu-contents-box">
                            <div className="board-menu-icon" />
                            <div className="board-menu-text">{post.created_at}</div>
                        </div>
                        <div className="board-menu-user-box">
                            <div className="board-menu-icon" />
                            <div className="board-menu-text">{post.created_by}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostList;
