import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likeCount} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={ addNewPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
