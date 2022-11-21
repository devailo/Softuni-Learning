import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

const myProvider: Provider = {
  useClass: class className {
    constructor(){
      console.log('Nameless class was blabla');
      
    }
  },
  provide: 'Test'
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    TestComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
