import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  mySkills: any = [

    {
      name: 'Angular',
      img: 'Angular.png'
    },
    {
      name: 'Typescript',
      img: 'Typescript.png'
    },
    {
      name: 'JavaScript',
      img: 'Javascript.png'
    },
    {
      name: 'HTML',
      img: 'html.png'
    },
    {
      name: 'Firebase',
      img: 'Firebase.png'
    },
    {
      name: 'Github',
      img: 'git.png'
    },
    {
      name: 'CSS',
      img: 'CSS.png'
    },
    {
      name: 'Rest-Api',
      img: 'Rest-Api.png'
    },
    {
      name: 'Scrum',
      img: 'scrum.png'
    },
    {
      name: 'Material Design',
      img: 'MaterialDesign.png'
    }
  ];

}
