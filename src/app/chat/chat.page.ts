import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    
  }

  back_msg() {
    this.route.navigateByUrl('tabs');
  }


  more() {
    let more  =     document.getElementsByClassName('more-select') as HTMLCollectionOf<HTMLElement>;
    if (more.length != 0) {
        more[0].style.opacity   =   "1";
    }
  }
  body_klik() {
    let more  =     document.getElementsByClassName('more-select') as HTMLCollectionOf<HTMLElement>;
    if (more.length != 0) {
      more[0].style.opacity     =   "0";
    }
  }

  MessageInput(value: string) {
    if (value.length >= 1) {
       let pesan  =   document.getElementsByClassName('btn_send') as HTMLCollectionOf<HTMLElement>;
       pesan[0].style.opacity   =   "1";
       pesan[0].style.zIndex    =   "1";

       let voice  =   document.getElementsByClassName('voice') as HTMLCollectionOf<HTMLElement>;
       voice[0].style.opacity   =   "0";
       voice[0].style.zIndex    =   "-1";
    } else {
       let pesan   =   document.getElementsByClassName('btn_send') as HTMLCollectionOf<HTMLElement>;
       pesan[0].style.opacity    =   "0";
       pesan[0].style.zIndex     =   "-1";

      let voice    =   document.getElementsByClassName('voice') as HTMLCollectionOf<HTMLElement>;
      voice[0].style.opacity     =   "1";
      voice[0].style.zIndex      =   "1";
    }
  }

  Kirim() {
    console.log('Pesan kirim');
  }

  PesanSuara() {
    console.log('pesan suara');
  }
}
