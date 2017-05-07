# Ng2translate

## Step 1 create project

Create angular project using angular cli using command ng new ng2translate.

## Step 2 jump to root

Go to root directory of your project.

## step 3 run your application

Check once Application work fine Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## step 4 installation ng2transalte

 install ng2transalte using npm install ng2-translate --save

 ## step 4  Import the TranslateModule

 The angular 2 transalte looking language file bydefault 
 in root directory u can overwrite location using 2 example.


mport {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate';
 
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

# or

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http} from '@angular/http';
import { AppComponent } from './app.component';
import {TranslateModule,TranslateLoader,TranslateStaticLoader} from "ng2-translate";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


## step 5 Add lanuage file

###ex en.json

{
  "HOME": {
    "TITLE": "Welcome!",
    "SELECT": "Change language"
  }
}


## step 6 coding

import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>
  `,
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "hi"]);  //adding languages in array
        translate.setDefaultLang('en');    // set default language

        let browserLang = translate.getBrowserLang();  //find the browser language
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  //check conditions for available options
    }
}
  
## step 7

run application using ng serve


## Reference 

https://www.npmjs.com/package/ng2-translate
