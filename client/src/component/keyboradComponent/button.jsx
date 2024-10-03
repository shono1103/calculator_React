import './button.css';

const Button = ({ input, name, text }) => {
    const onClick = () => {
        input(text);
    }
    return (
        <div className={name}>
            <button onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;