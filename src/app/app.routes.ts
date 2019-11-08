import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'dataTable', component: DataTableComponent },
    { path: '**', pathMatch:'full', redirectTo: '/form' }
];

export const appRouting = RouterModule.forRoot(routes);