

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    newText:string

}
type MessagePageType = {
    messages: Array<MessageType>
}
type SidebarType={

}
 export type RootStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
     Sidebar:SidebarType
}

let rerenderEntireTree=()=>{
    console.log('hello my friend')
}
let state: RootStateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 14},
            {id: 2, message: 'It is my first post', likesCount: 30},
            {id: 3, message: 'It is my second post', likesCount: 103}
        ],

        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Maksim'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Helena'},
            {id: 6, name: 'Maksim'},
        ],
        newText:'',
    },
    MessagePage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hi!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!!!'},
        ]
    },
    Sidebar:{}
}

export const addPosts=(postMessage:string)=>{

    const newPost: PostType={
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 103
    }
    state.ProfilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const updateNewPost=(newText:string)=>{

    state.ProfilePage.newText=newText
    rerenderEntireTree()
}
export const subscribe=(callBack:()=>void)=>{
    rerenderEntireTree=callBack
}
export default state
