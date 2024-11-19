import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})

export class RegisterService {
  private openModalSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public openModal$:Observable<boolean> = this.openModalSubject.asObservable();

  triggerOpenModal(modal:boolean) {
    this.openModalSubject.next(modal);
  }
}
