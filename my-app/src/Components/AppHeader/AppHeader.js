import "./AppHeader.css"

const AppHeader = ({important, like}) => {
    return (
        <div className="app-header d-flex">
            <h1>Shohrux Meliboyev</h1>
            <p>{important} posts, likes {like} </p>
        </div>
    )
}

export default AppHeader