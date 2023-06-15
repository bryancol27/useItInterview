import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Dependencies angular
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components:
import { NavbarComponent } from './components/navbar/navbar.component';

// Templates
import { MainComponent } from './templates/main/main.component';
import { LoginComponent } from './templates/login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		MainComponent,
		LoginComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
