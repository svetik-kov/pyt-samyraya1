import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "../Post";

export const MyPosts = () => {
    return (
        <div>
            MY posts
            <div>
                <textarea></textarea>
                <button> Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={'Hi, how are you?'} like={ 'like 14'}/>
                <Post message={'It is my first post'} like={'like 30'}/>

            </div>
        </div>

    );
};

