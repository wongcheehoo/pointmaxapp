import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RewardPage } from '../reward/reward';
import { ScanPage } from '../scan/scan';
import { NearbyPage } from '../nearby/nearby';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RewardPage;
  tab3Root = ScanPage;
  tab4Root = NearbyPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
