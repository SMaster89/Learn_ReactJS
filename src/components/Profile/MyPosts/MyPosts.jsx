import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let postData = [
        {
            id: 1,
            likeCount: 15,
            message: "Hi, how are you"
        },
        {
            id: 2,
            likeCount: 23,
            message: "It's my first post"
        }
    ]

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>
                <textarea cols="25" rows="3"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likes={postData[0].likeCount} />
                <Post message={postData[1].message} likes={postData[1].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
