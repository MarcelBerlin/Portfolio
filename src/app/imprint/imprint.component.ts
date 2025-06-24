import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.scss'],
    standalone: false
})
export class ImprintComponent implements OnInit {

  ngOnInit() { window.scrollTo(0, 0); }



}
