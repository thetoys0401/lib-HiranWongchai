import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './components/pages/addbook/addbook.component';
import { BookComponent } from './components/pages/book/book.component';
import { EditBookComponent } from './components/pages/editbook/editbook.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "book", component: BookComponent },
  { path: "book/add", component: NewBookComponent},
  { path: "book/edit/:id", component: EditBookComponent},
  { path: "login", component: LoginComponent} 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
