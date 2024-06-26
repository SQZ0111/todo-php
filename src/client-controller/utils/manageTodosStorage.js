import { todosData } from "../../todo-modell";
import Alpine from "alpinejs";
export function setTodosOnListenIntoLocalStorage() {
  document.addEventListener("todosChanged", () => {
    localStorage.setItem("todos", JSON.stringify(getTodosState()));
  });
}
function getTodosState() {
  const currentTodos = Alpine.store("todos").todosData;
  return currentTodos;
}
function updateTodosState(todos) {
  Alpine.store("todos").todosData = todos;
  Alpine.store("todos").enable = Alpine.store("todos").setEnable();
}

export function updateTodosOnEvents() {
  "DOMContentLoaded todoChanged".split(" ").forEach((eventElement) => {
    document.addEventListener(eventElement, () => {
      const todos = getTodosFromLocalStorage();
      updateTodosState(todos);
    });
  });
}
export function getTodosFromLocalStorage() {
  Alpine.store("todos").logState();
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    try {
      return JSON.parse(savedTodos);
    } catch (e) {
      console.log(`Some error occured: ${e}`);
      return todosData;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todosData));
  return todosData;
}
