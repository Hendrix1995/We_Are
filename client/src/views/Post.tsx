import React from "react";

import Comment from "../components/Comment";

function Post(post: any) {
    return (
        <section className="post">
            <div className="post-info-container">
                <div className="post-title">{post.title}</div>
                <div className="post-created-info-content">
                    <div className="post-created_at">3분전</div>
                    <div className="post-created_by-container">
                        <div className="post-created_by-icon" />
                        <div className="post-created_by">{post.created_by}</div>
                    </div>
                </div>
                <div className="post-content">{post.content}</div>
            </div>
            <Comment />
        </section>
    );
}

export default Post;
