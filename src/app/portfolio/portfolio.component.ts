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
      name: 'Join',
      img: 'join.png', 
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
    {
      name: 'Pokedex',
      img: 'pokedex-detail.png', 
      language: 'JavaScript | HTML | CSS | Api',
      text: 'Based on PokéAPI a simple library for some information about Pokemons.',
      link: 'https://pokedex.marcelberlin-developer.de/',
      linkGit: 'https://github.com/MarcelBerlin/Pokedex.git'
    },
    {
      name: 'Ring-of-fire',
      img: 'pokedex-detail.png', 
      language: 'Angular | Firebase',
      text: 'A simple Card created with Angular and Firebase.',
      link: 'https://ringoffire.marcelberlin-developer.de/',
      linkGit: 'https://github.com/MarcelBerlin/Ring-of-Fire.git'
    },

  ];

}
