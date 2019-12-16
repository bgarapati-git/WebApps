import { Component} from '@angular/core';
import { Employee } from './shared/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  name = 'Hello World! Welcome to my first applciation...';
  componentCalled = "false";
  values = '......';
  employees:Employee[] = [];
  selectedRow = "";
  passwords:string[] = [];
  selectedCategory:string;



  Add(){
    this.componentCalled = "true";
    this.values = "Two way binding";
  }

  onKeyPress(event: any) {
    this.values = event.target.value;
  }

  clearEmployees(){
    this.employees = [];
    this.selectedRow = "";
  }

  getSelectedRow(event:any){
    let row : number = 0;
    row = Number(event.target.value)+1
    this.selectedRow = "Row " + (row) + " is selected";
  }


  displayPwdDetails(){
    this.passwords.push("Badari " + (this.passwords.length + 1) );
  }

  setCategory(event: string){
    console.log("step 2: " + event)
    this.selectedCategory = event;
  }
}
