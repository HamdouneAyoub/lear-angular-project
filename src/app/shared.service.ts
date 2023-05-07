import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private currentlyOpenComponent = new BehaviorSubject<string>('');
  currentlyOpenComponent$ = this.currentlyOpenComponent.asObservable();

  setCurrentComponent(componentName: string): void {
    this.currentlyOpenComponent.next(componentName);
  }
}
