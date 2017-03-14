import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  styles: ['ion-content {font-size: calc(100% + 1.4rem);}']
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    this.customPageFontSize();

  }

  customPageFontSize(){
      // $('.scroll-content p').style.fontSize
      // font-size: calc(100% + 4vw);
  }

}
