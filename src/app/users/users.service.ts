import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import { UserComponent } from '../user/user.component';
import { User } from '../user/user';

@Injectable()
export class UsersService {

  private apiUrl: string;
  private results: number = 10;

  constructor(private http: Http) {
      this.apiUrl = 'https://randomuser.me/api/?results=' + this.results;
  }

  public getUsers(nation: string) : Observable<User[]> {
    var url = this.apiUrl;
    if (nation) {
      url= this.apiUrl + '&nat=' + nation;
    }

    console.log(url);
    return this.http.get(url)
          .map((res: Response) => res.json().results as User[]);
}

}
