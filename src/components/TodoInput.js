import '../styles/todoInput.scss';

const TodoInput = () => {
    return (
        <div className="input-div">
            <input
                className="todo-input"
                type="text"
                placeholder="다울었니? 할 일을 입력하렴ㅎ"
            />
            <button type="submit">+</button>
        </div>
    );
};

export default TodoInput;