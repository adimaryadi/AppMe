import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private alert: AlertController) { }

  ngOnInit() {
  }

  nomor     =   '';
 
  Detect(value) {
    let convert  =   value.replace(/[^0-9\.]+/g,"");
    this.nomor   =   convert;
    console.log(this.nomor);
  }

  async Verifikasi() {
    if(this.nomor.length < 10) {
       const alert    =  await this.alert.create({
         header:          'Pesan !',
         message:         'Nomor Telepon minimal 10',
         buttons:         ['OK']
       });
       alert.present();
    } else {
      this.router.navigateByUrl('verifikasi/'+ this.nomor);
    }
  }
}
