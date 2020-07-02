import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

window.store = store;

export default store;