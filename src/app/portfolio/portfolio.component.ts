import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

  projects: any = [
    {
      name: 'DaBubble',
      img: 'DABubble-laptop.png', 
      language: 'Angular | TypeScript | HTML | CSS',
      text: 'DaBubble is a group created collaborative communication platform that enables teams to chat in real-time, exchange files, and organize projects.',
      link: 'https://dabubble.marcelberlin-developer.de/',
      linkGit: 'https://github.com/MarcelBerlin/Angular-DABubble.git'
    },    
    {
      name: 'Join',
      img: 'JOIN.png', 
      language: 'JavaScript | HTML | CSS | Git',
      text: 'A group created Kanban-Board',
      link: 'https://join.marcelberlin-developer.de/',
      linkGit: 'https://github.com/MarcelBerlin/JOIN--GroupWork.git'
    },
    {
      name: 'Sharkie',
      img: 'Sharkie.png', 
      language: 'JavaScript | HTML | CSS',
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'https://sharkie.marcelberlin-developer.de/',
      linkGit: 'https://github.com/MarcelBerlin/sharkie.git'
    },    
  ];

}
