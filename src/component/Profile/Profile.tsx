import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosrs/Post";
import {MyPosts} from "./MyPosrs/Post/MyPosts";

export const Profile = ()=> {
   return (

           <div className={s.content}>
               <div>
               <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"}/>
               </div>
               <div> AVA +DESCRIPTION</div>

               <div>
                   <MyPosts/>
               </div>

           </div>

   );
}