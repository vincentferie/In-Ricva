import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotmanagementRoutingModule } from './lotmanagement-routing.module';
import { LotmanagementComponent } from '../lotmanagement/lotmanagement.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTableModule } from 'src/app/common-table/common-table.module';
import { PottingplanComponent } from './stuffing/pottingplan/pottingplan.component';
import { ExecutionComponent } from './stuffing/execution/execution.component';
import { UnloadsComponent } from './unloads/unloads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UnloadsaddeditComponent } from './unloadsaddedit/unloadsaddedit.component';
import { StorageComponent } from './storage/storage.component';
import { StorageaddeditComponent } from './storageaddedit/storageaddedit.component';


@NgModule({
  declarations: [
    LotmanagementComponent,
    PottingplanComponent,
    ExecutionComponent,
    UnloadsComponent,
    StorageComponent,
    UnloadsaddeditComponent,
    StorageaddeditComponent,
  ],
  imports: [
    CommonModule,
    LotmanagementRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonTableModule,
    SharedModule
  ]
})
export class LotmanagementModule { }
