import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations/operations.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [OperationsComponent, NewComponent, ListComponent, ItemComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
