import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './featured/contact/contact.component';
import { ResultsComponent } from './featured/results/results.component';
import { WinnersComponent } from './featured/winners/winners.component';

const routes: Routes = [{
  path: "", component: ResultsComponent
},
{
  path: "winners", component: WinnersComponent
},
  {
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
