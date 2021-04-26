import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'paginaInicial'
    },
    {
    path: 'paginaInicial',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module')
    .then(r => r.PaginaInicialModule)
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module')
    .then(r => r.AutenticacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
