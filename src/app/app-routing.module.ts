import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CurrentPhoneComponent } from './current-phone/current-phone.component';
import { AuthGuard } from './core/guards/auth-guards';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:phoneId', component: EditComponent},
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent
      },

      {
        path: ':phoneId',
        component: CurrentPhoneComponent,
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
