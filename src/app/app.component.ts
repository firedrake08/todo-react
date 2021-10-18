import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  tasks:any=[
   
];
addTask(t){
this.tasks.push({value:t,status:false});
}
deleteTask(index){
this.tasks.splice(index,1)
}
doneTask(index){
this.tasks[index].status = true;
}
undoTask(index){
this.tasks[index].status = false;
}

//ag-grid
columnDefs = [
  {field: 'make' },
  {field: 'model' },
  {field: 'price'}
];

rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];


}
