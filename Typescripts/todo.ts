import { v4 as uuidv4 } from 'uuid';
class Todo
{
    todoId:any;
    todoName:string;
    isCompleted:boolean;

    constructor(todoId:any,todoName:string,isCompleted:boolean) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.isCompleted =isCompleted;
    }

    display(){
        console.log(`${this.todoId} ${this.todoName} ${this.isCompleted}`);
    }
}


let temp:any=uuidv4();
let arr:any[]=temp.split('-')
let mytodo=new Todo(arr[0],'First-task',true);
mytodo.display();