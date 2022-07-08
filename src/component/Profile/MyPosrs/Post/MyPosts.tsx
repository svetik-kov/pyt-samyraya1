import s from "./MyPosts.module.css";
import React, {ChangeEvent, useRef} from "react";
import {Post} from "../Post";
/*import {PostsDataType} from "../../../../App";*/
import {ActionTypes, RootStateType} from "../../../../redux/State";
import {message} from "antd";

export type  postsDataPropsType = {
    /*postsData:Array<PostsDataType>*/
    state: RootStateType
    dispatch:(action:ActionTypes)=>void
   /* addPosts: (postMessage: string) => void
    updateNewPost: (newText: string) => void*/
    message: string
}

export const MyPosts = (props: postsDataPropsType) => {
    debugger


    let postsElements = props.state.ProfilePage.posts.map((p) => < Post key={p.id} message={p.message}
                                                                        likesCount={p.likesCount}/>);

    /*  let newPostElement=useRef<HTMLTextAreaElement>(null);
     let addPost=()=>{
        if (newPostElement.current!==null){
           props.addPosts(newPostElement.current.value)
        }
     }*/

    /* let newPostElement=React.createRef<HTMLTextAreaElement>();*/
    let addPost = () => {
        props.dispatch({type:'ADD-POSTS',postMessage:props.message})
        props.dispatch({type:'UPDATE-NEW-POSTS',newText:''})


    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
               /* props.updateNewPost(e.currentTarget.value)*/
        props.dispatch({type:'UPDATE-NEW-POSTS',newText:e.currentTarget.value})
    }

    return (
        <div className={s.postBlock}>
            <h3>MY posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
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

