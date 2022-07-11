import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotmanagementComponent } from './lotmanagement.component';
import { StorageComponent } from './storage/storage.component';
import { ExecutionComponent } from './stuffing/execution/execution.component';
import { PottingplanComponent } from './stuffing/pottingplan/pottingplan.component';
import { UnloadsComponent } from './unloads/unloads.component';
import { UnloadsaddeditComponent } from './unloadsaddedit/unloadsaddedit.component';

const routes: Routes = [
  {
    path: '',
    component: LotmanagementComponent,
    children: [
      {
        path: 'unloads',
        component: UnloadsComponent,
        data: {
          title: 'Unloads'
        }
      },
      {
        path: 'storage',
        component: StorageComponent,
        data: {
          title: 'Storage'
        }
      },
      {
        path: 'potting-plan',
        component: PottingplanComponent,
        data: {
          title: 'Potting Plan'
        }
      },
      {
        path: 'execution',
        component: ExecutionComponent,
        data: {
          title: 'Execution'
        }
      },
      {
        path: 'unloads-add',
        component: UnloadsaddeditComponent,
        data: {
          title: 'Unloads Add'
        }
      },
      {
        path: 'unloads-edit/:id',
        component: UnloadsaddeditComponent,
        data: {
          title: 'Unloads Add'
        }
      },
      {
        path: 'storage-add',
        component: UnloadsaddeditComponent,
        data: {
          title: 'Storage Add'
        }
      },
      {
        path: 'storage-edit/:id',
        component: UnloadsaddeditComponent,
        data: {
          title: 'Storage Add'
        }
      },
      {
        path: '',
        redirectTo: 'unloads',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotmanagementRoutingModule { }
