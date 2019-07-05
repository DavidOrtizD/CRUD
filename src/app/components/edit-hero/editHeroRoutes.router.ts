import { RouterModule, Routes } from '@angular/router';
import { EditHeroComponent } from './edit-hero.component';

const EDITHEROROUTES: Routes = [
  { path: '', component: EditHeroComponent },
];

export const EDITHEROROUTING = RouterModule.forChild(EDITHEROROUTES);
