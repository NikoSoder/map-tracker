import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css'],
})
export class FeatureCardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
