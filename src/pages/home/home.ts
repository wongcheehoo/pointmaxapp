import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openNotifications(){
    this.navCtrl.push(NotificationsPage);
  }

  goSearch(){
    this.navCtrl.push(SearchPage,{type : 'subscriber'});
  }


}
