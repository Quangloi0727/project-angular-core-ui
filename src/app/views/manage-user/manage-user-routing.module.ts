import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý User'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListUserComponent,
        data: {
          title: 'Danh sách User'
        }
      },
      {
        path: 'add',
        component: AddUserComponent,
        data: {
          title: 'Thêm mới User'
        }
      },
      // {
      //   path: 'modals',
      //   component: ModalsComponent,
      //   data: {
      //     title: 'Modals'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule {}
