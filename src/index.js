import './styles.css';

//import {Todo} from './classes/todo.class.js';
//import {TodoList} from './classes/todo-list.class.js';

//Se usa este archivo (el index dentro de clases) para agrupar las importaciones
import {Todo, TodoList} from './classes';//Para que busque el index.js
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

//const tarea1 = new Todo('Aprender Javascript');
//todoList.nuevoTodo(tarea1);
//console.log(todoList);
//crearTodoHtml(tarea1); 

//localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem('mi-key','ABC456');

/*setTimeout( ()=>{
    localStorage.removeItem('mi-key');
}, 3500);*/


//Para cargar las tareas del localStorage
todoList.todos.forEach(todo => crearTodoHtml(todo));


