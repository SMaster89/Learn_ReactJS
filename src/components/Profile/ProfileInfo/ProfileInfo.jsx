import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img src="https://www.foresteruniversity.com/uploads/PACE-1200x200.jpg" alt="Image 404"/>
            </div>
            <div className={s.descriptionBlock}>
            ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
