
export class Todo{

    //Recibe un Objeto, se colocan las llaves para hacer la desestructuración de los argumentos
    static fromJson({id, tarea, completado, creado}){
        const tempTodo= new Todo(tarea);

        tempTodo.id= id;
        tempTodo.completado= completado;
        tempTodo.creado= creado;

        return tempTodo;
    }

    constructor(tarea){

        this.tarea  = tarea;

        this.id         = new Date().getTime();//1248484848
        this.completado = false;
        this.creado     = new Date();

    }


    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}


