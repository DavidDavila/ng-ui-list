import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLetterService } from './services/select-letter.service';
import { LetterListComponent } from './components/letter-list/letter-list.component';
import { GroupByFirstLetterPipe } from './pipes/group-by-first-letter.pipe';
import { IonicModule } from '@ionic/angular';
import { ContentScrollableComponent } from './components/content-scrollable/content-scrollable.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    LetterListComponent,
    GroupByFirstLetterPipe,
    ContentScrollableComponent,
  ],
  exports: [
    LetterListComponent,
    GroupByFirstLetterPipe,
    ContentScrollableComponent,
  ],
})
export class NgUiList {
  constructor(@Optional() @SkipSelf() parentModule: NgUiList) {
    if (parentModule) {
      throw new Error(
        'SelectLetterModule is already loaded. Import it in the AppModule only.'
      );
    }
  }

  static forRoot({ offset }: { offset: number }): ModuleWithProviders<NgUiList> {
    return {
      ngModule: NgUiList,
      providers: [
        {
          provide: SelectLetterService,
          useFactory: ()=>{const s = new SelectLetterService; s.setOffset(offset); return s},
        }
      ],
    };
  }
}
