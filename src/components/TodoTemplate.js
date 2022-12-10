import '../styles/todoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div>
            <header className="todo-header">
                <h1>P가 만든...Todo List</h1>
                <div>{children}</div>
            </header>
        </div>
    );
};

export default TodoTemplate;