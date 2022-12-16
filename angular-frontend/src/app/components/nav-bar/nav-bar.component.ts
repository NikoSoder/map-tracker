import { Component, OnInit } from '@angular/core';
import { faSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  faSquare = faSquare;
  faGithub = faGithub;
  faBars = faBars;
  faChartLine = faChartLine;
  faPlusSquare = faPlusSquare;

  constructor() {}

  ngOnInit(): void {}
}
