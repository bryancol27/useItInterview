import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import shared componet in each route
import { MainComponent } from './templates/main/main.component';

// Import templates
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
	{
		path: '',
		// Global component at the app
		component: MainComponent,
		children: [
			{
				path: '',
				component: LoginComponent,
			},
			{
				path: 'users',
				loadChildren: () =>
					import('@modules/users/users.module').then(
						(m) => m.UsersModule,
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
