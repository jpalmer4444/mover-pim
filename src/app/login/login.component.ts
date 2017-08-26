import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Mover} from '../_model/mover';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private userService: UserService) {}

    ngOnInit() {
    }

    login() {
        this.userService.getMoverByUsernameAndPassword(this.username, this.password).
            subscribe((mover: Mover) => {
                if(!mover || !mover.username){
                    //login failed
                    console.log('Login Failed!');
                }else{
                    //login successful
                    console.log('Login Successful Welcome, ' + mover.firstName);
                }
            });
    }

}
