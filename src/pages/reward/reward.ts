import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html'
})
export class RewardPage {

  rewardCategory : string = 'available';
    
  constructor(public navCtrl: NavController) {

  }

  goSearch(){
    this.navCtrl.push(SearchPage,{type : 'rewards'});
  }
}
