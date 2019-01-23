import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProfileService } from '../profile.service';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;
  constructor(private profileservice: ProfileService) {
  }
  getUsers() {

    this.profileservice.keyedUser(this.username);
    this.profileservice.getProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

  }
  ngOnInit() {
    this.profileservice.keyedUser("MercurialMune");    
  }
}
