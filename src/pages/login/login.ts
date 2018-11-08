import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username : string;
  public password : string;
  public userInfo : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let user = {
      username: this.username,
      password: this.password
    };

    this.service.login(user).subscribe(
      data => this.userInfo = data,
      err => console.log(err),
      () => {
        this.navCtrl.setRoot(HomePage, {inf: this.userInfo});
      }
    );
  }

}
