import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { SalesComponent } from "./sales/sales.component";

const Router: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    SignupComponent,
    SalesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(Router)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
