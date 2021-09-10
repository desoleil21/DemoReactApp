function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");
  const onTextInputChange = React.useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddButtonClick = React.useCallback((e) => {
    setTodoList([{ name: textInput, isCompleted: false }, ...todoList]);
    setTextInput("");
  }, [textInput, todoList]);
  return (
    <div>
      <h3>To Do List</h3>
      <input name='add-todo' placeholder='Them viec can lam'
        value={textInput}
        onChange={onTextInputChange}
      ></input>
      <button
        isDisabled={!textInput}
        onClick={onAddButtonClick}
      >Thêm</button>
      <TodoList todoList={todoList} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
