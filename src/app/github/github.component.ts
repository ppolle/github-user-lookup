import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService]

})
export class GithubComponent implements OnInit {
	user:any[];

  constructor(private githubService:GithubService) { 
  	console.log('Component init');

  	this.githubService.getUser().subscribe(user => {
  		console.log(user)
  		this.user = user;
  	});

  }

  ngOnInit() {
  }

}
