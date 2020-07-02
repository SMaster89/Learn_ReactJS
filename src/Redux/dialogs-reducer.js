const ADD_MESSAGE = 'ADD-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default dialogsReducer;