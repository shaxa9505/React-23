import React, { Component } from 'react'
import "./PostAddForm.css"


export default class PostAddForm extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            text: ""
        }
    
        this.handleEvent = this.handleEvent.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    
    handleEvent(e) {
        this.setState({text: e.target.value})
    }

    handleClick(e) {
        e.preventDefault()
        this.props.onAdd(this.state.text);

        this.setState({text: ""})
    }
    

    render(props) {


        return (
            <form className="bottom-panel d-flex" onSubmit={this.handleClick}>
                <input
                    type="text"
                    placeholder="What are you thinking about"
                    className="form-control new-post-label"
                    onChange={this.handleEvent}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add posts
            </button>
            </form>
        )
    }
}



// const PostAddForm = ({ onAdd }) => {
//     return (
//         <div className="bottom-panel d-flex">
//             <input
//                 type="text"
//                 placeholder="What are you thinking about"
//                 className="form-control new-post-label"
//             />
//             <button
//                 type="submit"
//                 className="btn btn-outline-secondary"
//                 onClick={() => onAdd("Hello world")}
//             >
//                 Add posts
//             </button>
//         </div>
//     )
// }

// export default PostAddForm