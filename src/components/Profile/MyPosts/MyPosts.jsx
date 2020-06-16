import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} cols="25" rows="3"></textarea>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
