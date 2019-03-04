import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor(private socket: Socket) { }

  KirimPesan(pesan: string) {
    this.socket.emit("pesan", pesan);
  }

  AmbilPesan() {
    this.socket.on('ionicsend', function(pesan) {
      console.log(pesan);
    });
  }
}
