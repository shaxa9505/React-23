// import React, { Component } from 'react'
import "./PostListItem.css"


function PostListItem({label, id, onDelete, onToggleImportant, onToggleLiked, important, like}) {



    let classNames = "app-list-item d-flex justify-content-between"
    if (important) {
        classNames += " important"
    }

    if (like) {
        classNames += " like"
    }

    return (

        <div className={classNames}>
            <span onClick={() => onToggleLiked(id)} key={id} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    onClick={() => onToggleImportant(id)}
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star">
                    </i>
                </button>
                <button
                    onClick={() => onDelete(id)}
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash">
                    </i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
}

export default PostListItem;




// export default class PostListItem extends Component {
//     render() {

//         const { label, id, onDelete, onToggleImportant, onToggleLiked } = this.props
//         const { important, like } = this.state

//         let classNames = "app-list-item d-flex justify-content-between"
//         if (important) {
//             classNames += " important"
//         }

//         if (like) {
//             classNames += " like"
//         }

//         return (
//             <div className={classNames}>
//                 <span onClick={this.onLike} key={id} className="app-list-item-label">
//                     {label}
//                 </span>
//                 <div className="d-flex justify-content-center align-items-center">
//                     <button
//                         onClick={this.onImportant}
//                         type="button"
//                         className="btn-star btn-sm">
//                         <i className="fa fa-star">
//                         </i>
//                     </button>
//                     <button
//                         onClick={() => onDelete(id)}
//                         type="button"
//                         className="btn-trash btn-sm">
//                         <i className="fa fa-trash">
//                         </i>
//                     </button>
//                     <i className="fa fa-heart"></i>
//                 </div>
//             </div>
//         )
//     }
// }