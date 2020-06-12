import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHEWNRcrseH7SaAanPeEgAc7IzEw9QMhVgvAcYJbVRROZOIDd1&usqp=CAU" alt="Image 404"/>
            </div>
            <div>
            ava + description
            </div>
            <div>
            My post
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                post 1
                </div>
                <div className={s.item}>
                post 2
                </div>
            </div>
            </div>
        </div>
    );
}

export default Profile;
