const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;