import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  public pizzas : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pizzas = JSON.parse(localStorage.pizza);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

}
