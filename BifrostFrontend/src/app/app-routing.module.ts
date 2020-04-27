import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
    {
        path: 'Proyectos',
        loadChildren: () =>
            import('@ModAdmin/Proyectos/Proyectos.module').then(m => m.ProyectosModule),
    },
    {
        path: 'Estado',
        loadChildren: () =>
            import('@ModAdmin/Estado/Estado.module').then(m => m.EstadoModule),
    },
    {
        path: 'Role',
        loadChildren: () =>
            import('@ModAdmin/Roles/Roles.module').then(m => m.RolesModule),
    },
    {
        path: 'TipoCliente',
        loadChildren: () =>
            import('@ModAdmin/TipoCliente/TipoCliente.module').then(m => m.TipoClienteModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}