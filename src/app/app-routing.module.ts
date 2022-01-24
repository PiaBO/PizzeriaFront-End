import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza/components/pizza.component';
import { UserEditComponent } from './user/components/user.component';

const routes: Routes = [
   { path: '', component: PizzaListComponent, pathMatch: 'full'},
   { path: 'users',loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)},
   { path: 'orders',loadChildren: () => import('./orders/order.module').then(mod => mod.OrdersModule)},
   { path: 'pizzas', loadChildren: () => import('./pizza/pizza.module').then(mod => mod.PizzaModule)},
   { path: 'ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(mod => mod.IngredientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
