function TodoList({ todoList }) {
  return (
    <div>
      {
        todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  );
}
