import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
    public getBehaviour = new BehaviorSubject<any>({
      firstname: 'Kunle',
      lastname: 'Bella',
      age: '23',
      email: 'lola@getMaxListeners.com,'
    })
}
