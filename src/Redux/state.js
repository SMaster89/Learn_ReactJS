const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    likeCount: 15,
                    message: "Hi, how are you"
                },
                {
                    id: 2,
                    likeCount: 23,
                    message: "It's my first post"
                },
                {
                    id: 3,
                    likeCount: 9,
                    message: "Blablabla"
                },
                {
                    id: 4,
                    likeCount: 1,
                    message: "Dada"
                }
            ],
            newPostText: 'It-Kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Dimych",
                    src: "https://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    id: 2,
                    name: "Andrey",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D4-icon.png"
                },
                {
                    id: 3,
                    name: "Sveta",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D1-icon.png"
                },
                {
                    id: 4,
                    name: "Sasha",
                    src: "https://www.freeiconspng.com/uploads/face-avatar-png-14.png"
                },
                {
                    id: 5,
                    name: "Viktor",
                    src: "https://www.iconninja.com/files/785/42/357/avatar-face-icon.png"
                },
                {
                    id: 6,
                    name: "Valera",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-H2-icon.png"
                },
            ],
            messages: [
                {
                    id: 1,
                    message: "Hi"
                },
                {
                    id: 2,
                    message: "How are you?"
                },
                {
                    id: 3,
                    message: "Yo"
                },

            ],
            newMessageText: '',
        },
        friendsPage: {
            friends: [
                {
                    id: 1,
                    name: "Dimych",
                    src: "https://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    id: 2,
                    name: "Andrey",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D4-icon.png"
                },
                {
                    id: 3,
                    name: "Sveta",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D1-icon.png"
                },
                {
                    id: 4,
                    name: "Sasha",
                    src: "https://www.freeiconspng.com/uploads/face-avatar-png-14.png"
                },
                {
                    id: 5,
                    name: "Viktor",
                    src: "https://www.iconninja.com/files/785/42/357/avatar-face-icon.png"
                },
                {
                    id: 6,
                    name: "Valera",
                    src: "https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-H2-icon.png"
                },
            ]
        },
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observe- наблюдатель
    },

    dispatch(action) { // { type: 'ADD-POSt' } action - it is Object! and type - required
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

window.store = store;

export default store;