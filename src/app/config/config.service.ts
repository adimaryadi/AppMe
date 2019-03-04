import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  config       =    {
        url:  'http://localhost:8100'
  };

}
