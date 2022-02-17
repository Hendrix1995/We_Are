import React from "react";
import PostList from "../components/PostList";

function Coding() {
    return (
        <section className="board">
            <h2>Coding</h2>
            <div className="board-container">
                <PostList />
                <PostList />
            </div>
        </section>
    );
}

export default Coding;
