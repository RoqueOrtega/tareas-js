import { Todo } from "./todo.class";


export class TodoList {

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();
    }
    
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarEnElStorage();
    }



    eliminarTodo(id){

        this.todos= this.todos.filter(todo => todo.id != id)
        this.guardarEnElStorage();

    }


    marcarCompletado(id){

        for (const todo of this.todos){

            console.log(id, todo.id);

            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guardarEnElStorage();
                break;
            }

        }

    }


    eliminarCompletados(){

        this.todos= this.todos.filter(todo => !todo.completado)
        this.guardarEnElStorage();
    }




    guardarEnElStorage(){
        //Guarda la lista de tareas, los envia convertidos a json
        localStorage.setItem('todo', JSON.stringify(this.todos));
        
    }


    cargarLocalStorage(){
        //Obtiene las tareas guardadas y cargarlas al html
        //Forma larga
        /*if (localStorage.getItem('todo')){
            //Transforma al objeto original
            this.todos = JSON.parse(localStorage.getItem('todo'));
        }else{
            this.todos= [];
        }*/

        //Forma corta: con operador ternario
        this.todos = (localStorage.getItem('todo')) 
                        ? this.todos = JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }


}