import './styles.css';
import { Todo } from './class/todo.class.js';
import { TodoList } from './class/todo-list.class';
import { creartodoHtml } from './js/componentes';

export const todoList = new TodoList();+
todoList.todos.forEach(todo => creartodoHtml(todo));
/*
const tarea1 = new Todo('Aprender JavaScript');
todoList.nuevo(tarea1);
console.log(todoList);
tarea1.completado = true;
creartodoHtml( tarea1 );
localStorage.setItem('mi-key', 'ABC123');

//borrara en un segundo y medio el elemento mi-key
setTimeout(() => {
    localStorage.removeItem('mi-key');
},1500);*/