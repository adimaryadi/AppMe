import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerifikasiPage } from './verifikasi.page';
import { BrMaskerModule } from 'brmasker-ionic-3';
const routes: Routes = [
  {
    path: '',
    component: VerifikasiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerifikasiPage]
})
export class VerifikasiPageModule {}
