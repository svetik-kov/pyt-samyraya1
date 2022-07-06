import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

/*type AppPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData:Array<MessageDataType>
}
type DialogsDataType = {
    id: number,
    name: string
}
type MessageDataType = {
    id: number,
    name: string
}*/
const App=(/*props:AppPropsType*/)=> {

    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

               {/* <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>*/}

                <Route path={'/dialogs'} render={()=><Dialogs/>}/>
                <Route path={'/profile'} render={()=><Profile/>}/>

            </div>


        </div>
        </BrowserRouter>
    )
}

export default App;
