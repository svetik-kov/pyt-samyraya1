import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosrs/Post";
import {MyPosts} from "./MyPosrs/Post/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>

    );
}