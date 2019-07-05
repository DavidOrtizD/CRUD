import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditHeroComponent } from './edit-hero.component';
import { EDITHEROROUTING } from './editHeroRoutes.router';
import { HeroesService } from '../../services/heroes.service';

@NgModule({
  declarations: [EditHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    EDITHEROROUTING
  ],
  providers: [
    HeroesService
  ]
})
export class EditHeroModule { }
