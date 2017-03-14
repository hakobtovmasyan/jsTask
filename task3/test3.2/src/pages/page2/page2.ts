import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  item: any[];
  items: Array<{title: string,icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // this.selectedItem = navParams.get('item');


    this.item = [
            {'name':'Google Calendar','icon':'ion-custom-note'},
            {'name':'Weather','icon':'ion-custom-weather'},
            {'name':'Morning Excercises','icon':'ion-custom-dumbbell'}
    ];

    this.items = [];
      
    for (let i = 1; i < 15; i++) {
      this.items.push({
        title: this.item[0].name,
        icon: this.item[0].icon
      });

      this.items.push({
            title: this.item[1].name,
            icon: this.item[1].icon
      });

      this.items.push({
            title: this.item[2].name,
            icon: this.item[2].icon
      });
    }
  }
}
