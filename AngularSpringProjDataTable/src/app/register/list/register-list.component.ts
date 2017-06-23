import {Component,OnInit} from '@angular/core';
import {RegisterService} from '../register.service';
import {User} from '../user.interface';

@Component({
selector:'register-list',
templateUrl:'./register-list.component.html',

})

export class RegisterListComponent implements OnInit{

private getUsers:User[]=[];
private errorMessage:any='';

constructor(private registerService:RegisterService) {

}

ngOnInit(){
this.getRegisteredEmployees();
}


getRegisteredEmployees()
{
this.registerService.getEmployeeData().subscribe(
getUsers=>this.getUsers=getUsers,
error=>this.errorMessage=<any>error,
()=>console.log(' Get User data Request Completed'+this.getUsers)
);

}

}