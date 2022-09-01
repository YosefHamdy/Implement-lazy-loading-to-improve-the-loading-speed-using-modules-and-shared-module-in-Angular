import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ContactUsComponent, AboutUsComponent],
})
export class ThecommenModule {}
