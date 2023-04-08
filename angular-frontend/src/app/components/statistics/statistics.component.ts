import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Map } from 'src/app/types/map.interface';
import { TierInfo, TiersHashmap } from 'src/app/types/stats.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  @Input() maps: Map[];
  completed: Map[];
  projects: Map[];
  tierData: TierInfo[] = [];

  constructor() {
    this.maps = [];
    this.completed = [];
    this.projects = [];
  }

  doughnutChartData: any = {};
  doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    color: 'rgb(243, 244, 246)',
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  ngOnInit(): void {
    this.completed = this.maps.filter((map) => map.map_completed === 1);
    this.projects = this.maps.filter((map) => map.map_completed === 0);
    this.splitMapsToTiers();
  }

  // count maps by tiers and create data for doughnut chart
  splitMapsToTiers() {
    const tierCount = this.countCompletedMapsTiers();
    this.tierData = this.createTierData(tierCount);
    this.createDoughnutChartData();
  }

  createDoughnutChartData() {
    this.doughnutChartData = {
      labels: this.tierData.map((map) => map.tier),
      datasets: [
        {
          data: this.tierData.map((map) => map.count),
          borderColor: '#313133',
          color: 'white',
        },
      ],
    };
  }

  createTierData(tierCount: TiersHashmap): TierInfo[] {
    return Object.keys(tierCount).map((tier) => ({
      tier: `Tier ${tier}`,
      count: tierCount[tier],
    }));
  }

  countCompletedMapsTiers(): TiersHashmap {
    let counts: TiersHashmap = {};
    for (const map of this.completed) {
      if (!counts[map.map_tier]) {
        counts[map.map_tier] = 0;
      }
      counts[map.map_tier] += 1;
    }
    return counts;
  }
}
