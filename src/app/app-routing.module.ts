import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { CategoriesComponent } from "./categories/categories/categories.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    outlet: 'sidebar' 
  },
  {
    path: "",
    loadChildren: "./products/products.module#ProductModule"
  },
  
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
