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
}
