import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { rootRouterConfig } from './app.routes';
import {RepoComponent} from './github/repo-browser/repo.component';
import { GithubService } from './github/shared/github.service';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import { RegisterService} from './register/register.service';
import {RegisterListComponent} from './register/list/register-list.component';


@NgModule({
declarations:[AppComponent,
AboutComponent,
HomeComponent,
RepoComponent,
RepoListComponent,
RegisterComponent,
RegisterListComponent


],
imports:[
BrowserModule,
HttpModule,
RouterModule,
RouterModule.forRoot(rootRouterConfig, { useHash: true }),
ReactiveFormsModule


],
providers:[

    GithubService,
    RegisterService
],
bootstrap:[AppComponent]
})

export class AppModule{
}






