import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';
import { TierInfo, TiersHashmap } from 'src/app/types/stats.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  completedMaps: Map[] = [];
  projectMaps: Map[] = [];
  tierData: TierInfo[] = [];

  constructor(private apiService: ApiService) {}

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
    this.getData();
  }

  getData() {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      this.completedMaps = maps.filter((map) => map.map_completed === 1);
      this.projectMaps = maps.filter((map) => map.map_completed === 0);
      this.splitMapsToTiers();
    });
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
    for (const map of this.completedMaps) {
      if (!counts[map.map_tier]) {
        counts[map.map_tier] = 0;
      }
      counts[map.map_tier] += 1;
    }
    return counts;
  }
}
