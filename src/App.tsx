import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const TODOS = [
    new Todo('Learn React')
    , new Todo('Learn Typescript')]


  return (
    <Todos items={TODOS} />
  );
}

export default App;
