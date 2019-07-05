import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'heroes', loadChildren : './components/heroes/heroes.module#HeroesModule' },
  { path: 'edithero/:id', loadChildren : './components/edit-hero/edit-hero.module#EditHeroModule' },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const app_routing = RouterModule.forRoot(app_routes);
