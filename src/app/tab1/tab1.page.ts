import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private menu: MenuController,private route: Router) {}

  menuOpen() {
    this.menu.enable(true,'pesan');
    this.menu.open('pesan');
  }
  
  cari() {
     let caristyle            =    document.getElementsByClassName('cari') as HTMLCollectionOf<HTMLElement>; 
     if (caristyle.length != 0) {
        caristyle[0].style.opacity = "1";
        caristyle[0].style.zIndex  = "1";
        caristyle[0].style.visibility = "visible";
     }

     let btnpencarian         =  document.getElementsByClassName('pencarian') as HTMLCollectionOf<HTMLElement>;
     if (btnpencarian.length != 0) {
       btnpencarian[0].style.opacity      =   "0";
       btnpencarian[0].style.visibility   =   "visibility 0s, opacity 0.5s linear";
       btnpencarian[0].style.zIndex       =   "0";
     }
     let btntutuppencarian    = document.getElementsByClassName('tutuppencarian') as HTMLCollectionOf<HTMLElement>;
     if (btntutuppencarian.length != 0) {
      btntutuppencarian[0].style.opacity  =   "1";
     }
  }

  tutupcari() {
    let caristyle           =    document.getElementsByClassName('cari') as HTMLCollectionOf<HTMLElement>;
    if (caristyle.length != 0) {
      caristyle[0].style.opacity      =   "0";
      caristyle[0].style.zIndex       =   "-1";
      caristyle[0].style.visibility   =   "visibility 0s, opacity 0.5s linear";
    }
    let btnpencarian        =    document.getElementsByClassName('pencarian') as HTMLCollectionOf<HTMLElement>;
    if (btnpencarian.length != 0) {
      btnpencarian[0].style.opacity   =   "1";
      btnpencarian[0].style.zIndex    =   "1";
      btnpencarian[0].style.visibility=   "visibility 0s, opacity 0.5s linear";
    }
    let btntutuppencarian   =   document.getElementsByClassName('tutuppencarian') as HTMLCollectionOf<HTMLElement>;
    if (btntutuppencarian.length != 0) {
      btntutuppencarian[0].style.opacity    =   "0";
    }
  }

  Chat() {
    this.route.navigateByUrl('chat/' + '1');
  }
}
