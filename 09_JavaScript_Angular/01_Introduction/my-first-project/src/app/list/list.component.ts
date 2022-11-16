import { Component,  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

 users = [
  {
    firstName: 'vankata',
    lastName: 'velinov'
  },
  {
    firstName: 'blabi',
    lastName: 'sto'
  }
 ]
 showLastName = true;

 clickEvent(){
    this.showLastName = !this.showLastName
 }

}
