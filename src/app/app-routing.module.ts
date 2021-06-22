import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Home/Test', component: TestComponent
  },
  // {
  //   path: 'home', component: AgendaComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
