import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  currentLanguage: string;

  constructor(public router: Router, public translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });    

  }

  ngOnInit(): void {
    AOS.init();

    // Set default language to English
    this.translate.setDefaultLang('en');
    // Optionally set the initial language to English
    this.translate.use('en');

    // Initiale Sprache setzen
    this.currentLanguage = this.translate.currentLang || 'en';  // Standard 'en'
  }

  // Dynamische CSS-Klasse zurückgeben
  getDynamicClass(baseClass: string) {
    return this.currentLanguage === 'de' ? `${baseClass}-german` : baseClass;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
