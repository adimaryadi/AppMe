import { Component, OnInit } from '@angular/core';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { Platform } from '@ionic/angular';
import { Router , ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-verifikasi',
  templateUrl: './verifikasi.page.html',
  styleUrls: ['./verifikasi.page.scss'],
})
export class VerifikasiPage implements OnInit {

  constructor(private headercolor: HeaderColor,private platform: Platform,private route: Router,private routeactive: ActivatedRoute) { }

  nomor: string;
  ngOnInit() {
      this.headercolor.tint('#48d843');
      this.platform.ready().then(() => {
        document.addEventListener('backbutton', () => {
          navigator['app'].exitApp();
        });
      });
      this.nomor    =   this.routeactive.snapshot.paramMap.get('nomor');      
  }

  
  Verifikasi() {
    this.route.navigateByUrl('tabs');
  }

  KirimUlang() {
    console.log('kirim ulang');
  }
}
