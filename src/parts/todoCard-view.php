  <template x-for="todo in $store.todos.todosData">
      <p x-text="todo.title" class='h-10 w-40 mb-2 bg-light shadow-lg bg-white-rounded'></p>;
  </template>