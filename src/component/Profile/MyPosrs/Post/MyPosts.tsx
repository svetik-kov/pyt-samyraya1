import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "../Post";



export const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>MY posts</h3>
            <div>
                <div ><textarea></textarea></div>
                <div>
                    <button> Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={'Hi, how are you?'} like={ 'like 14'}/>
                <Post message={'It is my first post'} like={'like 30'}/>

            </div>
        </div>

    );
};

