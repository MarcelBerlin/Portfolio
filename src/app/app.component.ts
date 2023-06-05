import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(public router: Router) {}

  ngOnInit(): void {
    AOS.init();
  }
}
