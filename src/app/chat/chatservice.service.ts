import { Injectable } from '@angular/core';
import { Socket } from 'ng6-socket-io';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor(private socket: Socket) { }

  KirimPesan(pesan: string) {
    this.socket.emit("message", pesan);
  }

  AmbilPesan() {
    return this.socket.fromEvent("message")
               .pipe(map(data => console.log(data)));
  }
}
