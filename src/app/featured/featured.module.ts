import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ResultsComponent, WinnersComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ResultsComponent, WinnersComponent, ContactComponent]
})
export class FeaturedModule { }
