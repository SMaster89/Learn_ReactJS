import state from "./Redux/state";
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render"

// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App state={state} addPost={addPost}/>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

rerenderEntireTree(state);

// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//     <App state={state} addPost={addPost}/>
//       </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
