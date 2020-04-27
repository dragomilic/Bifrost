import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoClienteComponent } from './TipoCliente.component';

const routes: Routes = [
  {
    path: '',
    component: TipoClienteComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipoClienteRoutingModule {}