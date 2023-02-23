import Todo from './components/ToDo';


function App() {
  return (
    <div>
      <h1>My To Do</h1>
      <Todo text='Introduction'/>
      <Todo text='Intermediate react' />
      <Todo text='God-mode react' />
      <Todo text='Teach react' />

    </div>
  );
}

export default App;
