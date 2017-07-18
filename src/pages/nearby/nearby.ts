import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class NearbyPage {

  constructor(public navCtrl: NavController) {

  }

  goSearch(){
    this.navCtrl.push(SearchPage,{type : 'nearby'});
  }

}
