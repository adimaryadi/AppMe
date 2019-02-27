import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
// import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

// const config: SocketIoConfig = { url: 'http://localhost/infiplus/' , options: {} };
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    // SocketIoModule.forRoot(config)
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
