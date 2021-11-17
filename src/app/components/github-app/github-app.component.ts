import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery!:string;
  public githubProfile!:any;
  public githubRepos!:any[];
  public errorMessage!:string;
  constructor(private service:GithubService,
    private ngxSpinner:NgxSpinnerService ) { }

  public searchUser(){
    //start of the service
    this.ngxSpinner.show();
    this.service.getProfile(this.githubUserQuery).subscribe( data =>{
      this.githubProfile = data;
      console.log(this.githubProfile);
    },err=>{
      // this.errorMessage = err;
      console.log(err);
    });


    this.service.getRepos(this.githubUserQuery).subscribe(data =>{
      this.githubRepos = data;
    },err=>{
      // this.errorMessage = err;
      console.log(err);

    })
  }
  ngOnInit(): void {
  }

}
