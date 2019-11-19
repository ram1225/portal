import { CategoryService } from './services/category.service';
import { ApiService } from './services/api.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductService } from './services/product.service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { MaterialModule } from '../material.module';
import { CategoriesComponent } from '../categories/categories/categories.component';
import { UtilityService } from './services/utility.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule            
    ],
    declarations: [	 
		PageNotFoundComponent, CategoriesComponent
	],
    exports: [
        HttpClientModule,
        PageNotFoundComponent,MaterialModule
    ],
    providers: [AuthService, ProductService, ApiService, CategoryService]
})
export class SharedModule {
    /* Making UtilityService as singleton and injecting into root via forRoot */
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule,
          providers: [UtilityService]
        };
      }
 }
