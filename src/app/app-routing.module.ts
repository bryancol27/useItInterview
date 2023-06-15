import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import shared componet in each route
import { MainComponent } from './templates/main/main.component';

// Import templates
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				component: LoginComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
