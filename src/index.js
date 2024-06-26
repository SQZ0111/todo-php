import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "animate.css/animate.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Alpine from "alpinejs";
import { dispatchCustomTodoEvent } from "./client-controller/utils/customEvents.js";
import {
  setTodosOnListenIntoLocalStorage,
  updateTodosOnEvents,
} from "./client-controller/utils/manageTodosStorage.js";

//Calling the dispatchment of event
dispatchCustomTodoEvent();
document.addEventListener("alpine:init", () => {
  Alpine.store("todos", {
    enable: false,
    todosData: [],

    setEnable() {
      return this.todosData.length > 0 ? (this.enable = true) : false;
    },
    logState() {
      console.log(this.todosData);
    },
  });

  updateTodosOnEvents();
  setTodosOnListenIntoLocalStorage();
});
Alpine.start();
