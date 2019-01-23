import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user-class/user';
import { Repository } from './repository-class/repository';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private access_token = '31007ba38777c4d73e19d294160205b9a38ae3d2';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'MercurialMune';
  }
  getProfile() {
    return this.http.get('https://api.github.com/users/' + this.username + "?access_token=" + this.access_token).pipe(map(res => res));
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + "/repos?access_token=" + this.access_token).pipe(map(res => res));
  }
  keyedUser(username: string) {
    this.username = username;
  }
  OnInit(){
    this.username = "MercurialMune";
  }
}
