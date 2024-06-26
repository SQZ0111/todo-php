//create custom Event an attach to corresponding elements
export function dispatchCustomTodoEvent() {
  const changeTodos = new Event("todoChanged");
  document.dispatchEvent(changeTodos);
}
