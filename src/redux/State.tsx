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

export let addPosts=(postMessage:string)=>{
    debugger
    let newPost={
        id: 4,
        message: postMessage,
        likesCount: 103
    }
    state.ProfilePage.posts.push(newPost)
}
export default state
