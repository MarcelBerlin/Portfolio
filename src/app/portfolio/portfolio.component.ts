import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        name: 'DaBubble',
        img: 'DABubble-laptop.png',
        language: 'Angular | TypeScript | HTML | CSS',
        textKey: 'DABubble',
        link: 'https://dabubble.marcelberlin-developer.de/',
        linkGit: 'https://github.com/MarcelBerlin/Angular-DABubble.git'
      },
      {
        name: 'Join',
        img: 'JOIN.png',
        language: 'JavaScript | HTML | CSS | Git',
        textKey: 'Join',
        link: 'https://join.marcelberlin-developer.de/',
        linkGit: 'https://github.com/MarcelBerlin/JOIN--GroupWork.git'
      },
      {
        name: 'Sharkie',
        img: 'Sharkie.png',
        language: 'JavaScript | HTML | CSS',
        textKey: 'Sharkie',
        link: 'https://sharkie.marcelberlin-developer.de/',
        linkGit: 'https://github.com/MarcelBerlin/sharkie.git'
      }
    ];
  }

  getProjectText(key: string): string {
    // Gibt den übersetzten Text zurück
    return this.translate.instant(`PROJECTS.${key}`);
  }
}
