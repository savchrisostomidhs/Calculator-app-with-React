import "./Button.css"

function Button({ content, className, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button