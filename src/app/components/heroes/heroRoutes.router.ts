import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const HEROROUTES: Routes = [
  { path: '', component: HeroesComponent }
];

export const HEROROUTING = RouterModule.forChild(HEROROUTES);
