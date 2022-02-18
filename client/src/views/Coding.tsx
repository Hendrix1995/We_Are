import React from "react";
import PostList from "../components/PostList";

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

function Coding({ dummyData }: postsProps) {
    return (
        <section className="board">
            <h2>Coding</h2>
            <div className="board-container">
                <PostList dummyData={dummyData} />
            </div>
        </section>
    );
}

export default Coding;
