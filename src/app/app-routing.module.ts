import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: 'characters', loadChildren: () => import('./@pages/characters/characters.module').then((module) => module.CharactersModule) },
    { path: 'details/:id', loadChildren: () => import('./@pages/details/details.module').then((module) => module.DetailsModule) },
    { path: 'votes', loadChildren: () => import('./@pages/votes/votes.module').then((module) => module.VotesModule) },
    { path: '**', redirectTo: '/characters', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
