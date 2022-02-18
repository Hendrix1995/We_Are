import React from "react";

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

function MainBoard({ dummyData }: postsProps) {
    return (
        <section className="board-container">
            <h3>개시판 이름</h3>
            {dummyData.map((post) => (
                <div className="board-content-box">
                    <div className="board-title">{post.title}</div>
                    <div className="board-created-at">2022.01.25</div>
                </div>
            ))}
        </section>
    );
}

export default MainBoard;
