import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosrs/Post";
import {MyPosts} from "./MyPosrs/Post/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

export type  ProfilePropsType={
    posts:Array<PostsDataType>
}

export const Profile = (props:ProfilePropsType) => {

   /* let postsData = [
        {id: 1,message: 'Hi, how are you?',  likesCount: 14},
        {id: 2, message: 'It is my first post', likesCount: 30},
        {id: 3, message: 'It is my second post', likesCount: 103}
    ]*/
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.posts} />
        </div>

    );
}