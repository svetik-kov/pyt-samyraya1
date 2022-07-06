import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostsDataType} from "./component/Profile/MyPosrs/Post/MyPosts";

/*type AppPropsType = {
  /!*  dialogsData: Array<DialogsDataType>
    messagesData:Array<MessageDataType>*!/

}*/

/*type DialogsDataType = {
    id: number,
    name: string
}
type MessageDataType = {
    id: number,
    name: string
}*/
const App=(/*props:AppPropsType*/)=> {
    let postsData = [
        {id: 1,message: 'Hi, how are you?',  likesCount: 14},
        {id: 2, message: 'It is my first post', likesCount: 30},
        {id: 3, message: 'It is my second post', likesCount: 103}
    ]

    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

               {/* <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>*/}

                <Route path={'/dialogs'} render={()=><Dialogs/>}/>
                <Route path={'/profile'} render={()=><Profile posts={postsData}/>}/>

            </div>


        </div>
        </BrowserRouter>
    )
}

export default App;
