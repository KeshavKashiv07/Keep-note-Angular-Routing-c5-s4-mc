import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteViewComponent } from './note-view/note-view.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';

export const routes: Routes = [{
  path: "home",
  component: NoteViewComponent
},
{
  path: "note-edit/:id",
  component: NoteEditComponent
},
{
  path: "note-delete/:id",
  component: NoteDeleteComponent
},
{
  path :"register",
  component : RegisterFormComponentComponent
}, 
{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "**",
  component: NotFoundComponent
}
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
