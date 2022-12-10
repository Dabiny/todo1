import './reset.css'
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoSuprise from './components/TodoSuprise';

function App() {
    return (
        <>
          <TodoTemplate>
              어떻게든 되겠지ㅎ
              <TodoSuprise />
              <TodoInput />
          </TodoTemplate>

        </>
    );
}

export default App;
