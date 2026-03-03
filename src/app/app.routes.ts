import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home-orchestrator.component').then((m) => m.HomeOrchestratorComponent),
  },
];
