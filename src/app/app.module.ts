import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubCredComponent } from './credentials/github-cred/github-cred.component';
import { FormsModule } from '@angular/forms';
import { GithubService } from './service/github.service';
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent,
    GithubCredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
    // HttpErrorResponse
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
