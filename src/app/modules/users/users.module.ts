import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersComponent } from './users.component';
import { DetailsUserComponent } from './templates/details-user/details-user.component';

// Directives
import { TouchlinkDirective } from './directive/touchlink.directive';

@NgModule({
	declarations: [UsersComponent, DetailsUserComponent, TouchlinkDirective],
	imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
