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
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: "Dimych"
            },
            {
                id: 2,
                name: "Andrey"
            },
            {
                id: 3,
                name: "Sveta"
            },
            {
                id: 4,
                name: "Sasha"
            },
            {
                id: 5,
                name: "Viktor"
            },
            {
                id: 6,
                name: "Valera"
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

        ]
    }
}

export default state;