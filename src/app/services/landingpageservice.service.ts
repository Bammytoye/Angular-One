import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  
  public item = 'My name is Oyindamola'
  public numberarray:number[]=[1,2,3,4,5,6,7,9]
  public data=JSON.parse(localStorage.getItem('contacts') || '[]')
  private localStorageKey = 'contacts';
  
  get dataedit(): any[] {
      const storedData = localStorage.getItem(this.localStorageKey);
      return storedData ? JSON.parse(storedData) : [];
  }

  saveData(dataedit: any[]): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(dataedit));
  }
  
  returnitem(){
      return this.item
  }

  public returnnum(){
      return 
  }
  public returndata(){
      return this.data
  }
public getstudents(){
  return JSON.parse(localStorage['newstudents'])
}
}
