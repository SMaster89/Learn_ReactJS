import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
            <img src="https://www.foresteruniversity.com/uploads/PACE-1200x200.jpg" alt="Image 404"/>
            </div>
            <div>
            ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
