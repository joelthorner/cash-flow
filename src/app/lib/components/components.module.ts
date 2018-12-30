import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NavTitleComponent } from './nav-title/nav-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavComponent, NavTitleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent, NavComponent
  ]
})
export class ComponentsModule { }
