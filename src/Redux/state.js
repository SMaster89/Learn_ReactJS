// let posts = [
//     {
//         id: 1,
//         likeCount: 15,
//         message: "Hi, how are you"
//     },
//     {
//         id: 2,
//         likeCount: 23,
//         message: "It's my first post"
//     },
//     {
//         id: 3,
//         likeCount: 9,
//         message: "Blablabla"
//     },
//     {
//         id: 4,
//         likeCount: 1,
//         message: "Dada"
//     }
// ]

// let dialogs = [
//     {
//         id: 1,
//         name: "Dimych"
//     },
//     {
//         id: 2,
//         name: "Andrey"
//     },
//     {
//         id: 3,
//         name: "Sveta"
//     },
//     {
//         id: 4,
//         name: "Sasha"
//     },
//     {
//         id: 5,
//         name: "Viktor"
//     },
//     {
//         id: 6,
//         name: "Valera"
//     },
// ]

// let messages = [
//     {
//         id: 1,
//         message: "Hi"
//     },
//     {
//         id: 2,
//         message: "How are you?"
//     },
//     {
//         id: 3,
//         message: "Yo"
//     },
//
// ]

let rerenderEntireTree = () => {

}

let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText =(newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observe- наблюдатель
}

export default state;