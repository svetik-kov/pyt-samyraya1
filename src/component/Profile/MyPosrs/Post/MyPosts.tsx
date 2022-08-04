import s from "./MyPosts.module.css";
import React, {ChangeEvent, useRef} from "react";
import {Post} from "../Post";

import {
    ActionTypes,
    RootStateType,
  } from "../../../../redux/State";


export type  postsDataPropsType = {

    state: RootStateType
    dispatch: (action: ActionTypes) => void
    message: string
}


export const MyPosts = (props: postsDataPropsType) => {

    const addPostActionCreator = () => {
        return {
            type: 'ADD-POSTS',
            postMessage: props.message
        } as const
    }

    let updateNewPostTextActionCreator = (value:string) => {
        return {
            type: 'UPDATE-NEW-POSTS',
            newText: value
        } as const
    }

    let postsElements = props.state.ProfilePage.posts.map((p) => < Post key={p.id} message={p.message}
                                                                        likesCount={p.likesCount}/>);


    let addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updateNewPostTextActionCreator(''))


    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.postBlock}>
            <h3>MY posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

