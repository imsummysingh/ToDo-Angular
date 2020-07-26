import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public counter=0;
  public list=[];

  public newTask;

  public addTask(){
    this.list.push(this.newTask);
    this.newTask='';
  }

  public deleteTask(index){
    this.list.splice(index,1);
  }

  public increment(){
    this.counter+=1;
  }

  // public addToList(){
  //   this.list.push(1);
  // }

}
