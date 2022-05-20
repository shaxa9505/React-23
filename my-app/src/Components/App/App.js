import React, { Component } from 'react'
import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel"
import './App.css'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn React JS", important: false, like: false, id: 1 },
                { label: "That is so good", important: false, like: false, id: 2 },
                { label: "i need a beak...", important: false, like: false, id: 3 },
            ]
        }
        this.onDelete = this.onDelete.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.maxId = 4
    }

    onDelete(id) {
        this.setState({ data: this.state.data.filter(data => data.id !== id) })
    }

    onAdd(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr 
            }
        })
    }

    onToggleImportant(id) {
        // console.log(`Important ${id}`);
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            console.log(oldItem);
            const newItem = {...oldItem, important: !oldItem.important};
            console.log(newItem);
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        // console.log(`Liked ${id}`);
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            console.log(oldItem);
            const newItem = {...oldItem, like: !oldItem.like};
            console.log(newItem);
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    

    render() {

        const like = this.state.data.filter(item => item.like).length;
        const important = this.state.data.length;

        return (
            <div className="app">
                <AppHeader important={important} like={like} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.onAdd} />
            </div>
        )
    }
}


