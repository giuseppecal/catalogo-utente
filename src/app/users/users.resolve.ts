import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UsersService } from "./users.service";
import { User } from "../user/user";


@Injectable()
export class UsersResolve implements Resolve<User[]> {

    constructor(private usersService: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {

        var nation = route.params['nation'];

        console.log(nation);
        return this.usersService.getUsers(nation);
    }
}