import { Component } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 private toasterService: ToasterService;
 
    constructor(toasterService: ToasterService) {
        this.toasterService = toasterService;
    }
 
    popToast() {
        this.toasterService.pop('success', 'Success', 'message');
    }

      errorToast() {
        this.toasterService.pop('error', 'Error', 'message');
    }

      worningToast() {
        this.toasterService.pop('warning', 'Warning', 'message');
    }
}
