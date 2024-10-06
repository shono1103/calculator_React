import './button.css';

const Button = ({ input, name, text, value }) => {
    const onClick = () => {
        input(value);
    }
    return (
        <div className={name}>
            <button onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;