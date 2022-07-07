import s from "./MyPosts.module.css";
import React, {useRef} from "react";
import {Post} from "../Post";
/*import {PostsDataType} from "../../../../App";*/
import {RootStateType} from "../../../../redux/State";

 export type  postsDataPropsType={
    /*postsData:Array<PostsDataType>*/
     state:RootStateType
     addPosts:(postMessage:string)=>void
}

export const MyPosts = (props:postsDataPropsType) => {
     debugger


    let postsElements= props.state.ProfilePage.posts.map((p)=>   < Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

   /*  let newPostElement=useRef<HTMLTextAreaElement>(null);
    let addPost=()=>{
       if (newPostElement.current!==null){
          props.addPosts(newPostElement.current.value)
       }
    }*/

    let newPostElement=React.createRef<HTMLTextAreaElement>();
    let addPost=()=>{
        if (newPostElement.current){
            props.addPosts(newPostElement.current.value)
        }
        }



    return (
        <div className={s.postBlock}>
            <h3>MY posts</h3>
            <div>
                <div >
                    <textarea ref={newPostElement}></textarea>
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

