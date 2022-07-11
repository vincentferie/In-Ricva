import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportsRoutingModule } from './exports-routing.module';
import { ExportsComponent } from './exports.component';
import { ParkinglistComponent } from './parkinglist/parkinglist.component';
import { BillofladingComponent } from './billoflading/billoflading.component';


@NgModule({
  declarations: [
    ExportsComponent,
    ParkinglistComponent,
    BillofladingComponent
  ],
  imports: [
    CommonModule,
    ExportsRoutingModule
  ]
})
export class ExportsModule { }
