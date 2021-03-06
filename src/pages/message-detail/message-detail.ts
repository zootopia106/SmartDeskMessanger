import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html',
})
export class MessageDetail {

  public sender:string;
  public av:string;
  public last_message:string;
  public send_like_icon:boolean = false;
  public likeBtnVisible:boolean = false;
  public tabBarElement: any;

  public messages = []; // You can get all the chat details from your API

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.sender = this.navParams.get('sender');
    this.av = this.navParams.get('av');
    this.last_message = this.navParams.get('last_message');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  sendLike() {
    if(this.send_like_icon === false) {
      this.send_like_icon = true;
    }
      // Allow heart effect
      this.likeBtnVisible = !this.likeBtnVisible;
  }

  openModal() {
    console.log('Open Modal');
    let actionsheet = this.actionSheetCtrl.create({
      title: 'Choose Plan',
      buttons: [
        {
          text: 'Send mail to user',
          handler: () => {
            console.log("Send mail to user");
          }
        },
        {
          text: 'Copy mail to clipboard',
          handler: () => {
            console.log("Copy mail to clipboard");
          }
        }
      ]
    });
    actionsheet.present();
  }

}
