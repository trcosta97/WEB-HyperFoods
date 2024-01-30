import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './components/restaurant/create-restaurant/create-restaurant.component';
import { ListRestaurantsComponent } from './components/restaurant/list-restaurants/list-restaurants.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'listRestaurant',
    pathMatch:'full'
  },
  {
    path:'createRestaurante',
    component: CreateRestaurantComponent
  },
  {
    path:'listRestaurant',
    component: ListRestaurantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
