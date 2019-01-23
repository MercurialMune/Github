import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor(private profileservice: ProfileService) {
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
  }
}
