import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectLetterService } from '../../services/select-letter.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'alphabetical-list',
  templateUrl: './content-scrollable.component.html',
})
export class ContentScrollableComponent {
  offset = 122;
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  constructor(public _selectLetterService: SelectLetterService) {
    this._selectLetterService.updateList$.subscribe(() => {
      const actualLetter =
        this._selectLetterService.selectedtLetter$.getValue();

        const anchorDom: HTMLLIElement | null = document.querySelector(
          `[letter-list="${actualLetter}"]`
        ) as HTMLLIElement;
      try {
        this.content.scrollToPoint(0, anchorDom.offsetTop - this._selectLetterService.getOffset(), 600);
      } catch (error) {
        this.content['el'].parentElement​?.scrollTo({left:0, top:anchorDom.offsetTop - this._selectLetterService.getOffset(), behavior:'smooth'});
      }
      
    });
  }
  onTouchStart() {
    this._selectLetterService.isFromLetters &&
      this._selectLetterService.selectLetter(undefined, false);
  }
  updateLetter() {
    if (!this._selectLetterService.isFromLetters) {
      let lis = document.querySelectorAll('#plant-list >li');
      for (let i = 0; i < lis.length; i++) {
        let family = lis[i].getBoundingClientRect();
        if (family.height + family.top > 122) {
          const letter = lis[i].id.replace('letter-', '');

          if (
            letter !== this._selectLetterService.selectedtLetter$.getValue()
          ) {
            console.log({
              letter,
              inService: this._selectLetterService.selectedtLetter$.getValue(),
            });
            this._selectLetterService.selectLetter(letter, false);
          }
          break;
        }
      }
    }
  }
}
