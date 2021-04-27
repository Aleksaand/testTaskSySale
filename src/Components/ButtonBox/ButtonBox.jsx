import './ButtonBox.css';

export const ButtonBox = (props) => {
    return (
        <div className="div__flex">
            <div className="button__counter">
                <div className="button__decrement" onClick={props.decrement}>-</div>
                <div>{props.count}</div>
                <div className="button__increment" onClick={props.increment}>+</div>
            </div>
            <div className="button__submit">
                Купить
            </div>
        </div>
    );
};