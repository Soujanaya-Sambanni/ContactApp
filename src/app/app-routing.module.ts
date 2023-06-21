import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { FooterComponent } from './footer/footer.component';
import { GroupnameComponent } from './groupname/groupname.component';
import { HeaderComponent } from './header/header.component';
import { GupdateComponent } from './gupdate/gupdate.component';
import { ContactComponent } from './contact/contact.component';
import { CupdateComponent } from './cupdate/cupdate.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'contact',component:ContactComponent},
  {path:'cupdate/:id',component:CupdateComponent},
  {path:'grouplist/:item',component:GrouplistComponent},
  {path:'groupname',component:GroupnameComponent},
  {path:'gupdate/:id',component:GupdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
