import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UsersResolve } from "./users/users.resolve";

const appRoutes: Routes = 
    [{
        path: 'users',
        component: UsersComponent,
        //resolve: { users: UsersResolve } 
    },
    {
        path: 'users/:nation',
        component: UsersComponent,
        //resolve: { users: UsersResolve } 
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);