import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { routing } from './app.routes';
import { UsersService } from './users/users.service';
import { UsersResolve } from './users/users.resolve';
import { HttpModule } from '@angular/http';
import { NationPipe } from './shared/nation.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    UserComponent,
    NationPipe
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
    providers: [UsersService, UsersResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
