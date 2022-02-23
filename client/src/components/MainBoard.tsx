import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface postsProps {
    dummyData: {
        id: number;
        title: string;
        content: string;
        suggestion: number;
        category: number;
        created_by: string;
        created_at: string;
    }[];
}

function MainBoard({ dummyData }: postsProps, setClickedPost: any) {
    const navigate = useNavigate();
    const clickPostHandler = (post: any) => {
        navigate(`/postid=${post.id}`);
    };

    return (
        <section className="board-container">
            <h3>{dummyData[0].category === 1 ? "Coding" : "Life"}</h3>
            {dummyData.map((post) => (
                <div className="board-content-box" onClick={() => clickPostHandler(post)}>
                    <div className="board-title">{post.title}</div>
                    <div className="board-created-at">
                        {post.created_at.slice(0, 4)}년 {post.created_at.slice(5, 7)}월 {post.created_at.slice(8, 10)}일 {post.created_at.slice(11, 16)}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default MainBoard;
