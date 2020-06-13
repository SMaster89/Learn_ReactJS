import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://s8.vcdn.biz/static/f/622925351/image.jpg/pt/r300x423x4" alt=""/>
        {props.message} 
        <div>
            <span>
                Like {props.likes}
            </span>
        </div>
        </div>

    );
}

export default Post;
