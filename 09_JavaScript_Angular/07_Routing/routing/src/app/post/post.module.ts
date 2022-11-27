import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './list/list.component';



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
