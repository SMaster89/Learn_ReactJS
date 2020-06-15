import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likeCount} />)

    let newPostText = React.createRef();

    let  addPost = () => {
        let text = newPostText.current.value;
        alert(text);
    };

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostText} cols="25" rows="3"></textarea>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
