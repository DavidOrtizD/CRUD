import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HEROROUTING } from './heroRoutes.router';
import { HeroDataPipe } from '../../pipes/hero-data.pipe';

@NgModule({
  declarations: [HeroesComponent,
      HeroDataPipe
  ],
  imports: [
    CommonModule,
    HEROROUTING
  ]
})
export class HeroesModule { }
