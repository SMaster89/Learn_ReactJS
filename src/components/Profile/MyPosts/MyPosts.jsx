import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let posts = [
        {
            id: 1,
            likeCount: 15,
            message: "Hi, how are you"
        },
        {
            id: 2,
            likeCount: 23,
            message: "It's my first post"
        },
        {
            id: 3,
            likeCount: 9,
            message: "Blablabla"
        },
        {
            id: 4,
            likeCount: 1,
            message: "Dada"
        }
    ]

    let postsElements = posts.map((p) => <Post message={p.message} likes={p.likeCount} />)

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>
                <textarea cols="25" rows="3"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
