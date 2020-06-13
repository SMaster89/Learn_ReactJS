import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likes='15' />
                <Post message="It's my first post" likes='23'/>
            </div>
        </div>
    );
}

export default MyPosts;
