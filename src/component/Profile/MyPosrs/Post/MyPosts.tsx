import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "../Post";

 export type  postsDataPropsType={
    postsData:Array<PostsDataType>
}
 export type  PostsDataType={
    id: number,
    message: string,
    likesCount: number
}
export const MyPosts = (props:postsDataPropsType) => {

   /* let postsData = [
        {id: 1,message: 'Hi, how are you?',  likesCount: 14},
        {id: 2, message: 'It is my first post', likesCount: 30},
    ]*/
    let postsElements= props.postsData.map((p)=>   <Post message={p.message} likesCount={p.likesCount}/>);
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
                {postsElements}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>

    );
};

