import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'Imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
