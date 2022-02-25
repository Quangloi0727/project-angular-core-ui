// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Alert Component
// import { AlertModule } from 'ngx-bootstrap/alert';
import { ListUserComponent } from './list-user.component';

// import { BadgesComponent } from './badges.component';

// // Modal Component
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { ModalsComponent } from './modals.component';

// Notifications Routing
import { ManageUserRoutingModule } from './manage-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    FormsModule
    // AlertModule.forRoot(),
    // ModalModule.forRoot()
  ],
  declarations: [
    ListUserComponent,
    // BadgesComponent,
    // ModalsComponent
  ]
})
export class ManageUserModule { }
