import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [

  {path: '', component: MainpageComponent},
  {path: 'imprint', component: ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
