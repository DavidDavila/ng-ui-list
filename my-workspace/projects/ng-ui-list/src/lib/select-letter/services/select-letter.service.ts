import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LETTER_LIST } from '../constants/letter-list.const';

@Injectable({
  providedIn: 'root',
})
export class SelectLetterService {
  private offset:number = 5;
  public selectedtLetter$: BehaviorSubject<string> = new BehaviorSubject(
    LETTER_LIST[0]
  );
  public updateList$: Subject<void> = new Subject();
  isFromLetters: boolean = false;
  constructor() {}
  setOffset(offset:number){
    this.offset = offset;
  }
  getOffset():number{
    return this.offset  
  }
  selectLetter(
    letter: string = this.selectedtLetter$.getValue(),
    isFromLetters: boolean
  ) {
    this.isFromLetters = isFromLetters;
    this.selectedtLetter$.next(letter);
  }
  updateList() {
    this.updateList$.next();
  }
}
