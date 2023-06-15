import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components as pages
import { UsersComponent } from './users.component';
import { DetailsUserComponent } from './templates/details-user/details-user.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent,
	},
	{
		path: 'details',
		component: DetailsUserComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsersRoutingModule {}
