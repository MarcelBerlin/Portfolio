import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(public translate: TranslateService) { }


  closeMenu() {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.click();
    }
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}


