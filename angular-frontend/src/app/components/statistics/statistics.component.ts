import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';

interface TiersHashmap {
  [key: string]: number;
}
interface TierInfo {
  tier: string;
  count: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  completedMaps: Map[] = [];
  tierData?: TierInfo[];

  constructor(private apiService: ApiService) {}

  // BAR CHART
  barChartData: any;
  barChartOptions: ChartConfiguration['options'] = {
    color: 'rgb(243, 244, 246)',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(243, 244, 246)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(243, 244, 246)',
        },
      },
    },
  };

  // DOUGHNUT CHART
  doughnutChartData: any;
  doughnutChartOptions: ChartConfiguration['options'] = {
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
      console.log('All user maps', maps);
      this.completedMaps = maps.filter((map) => map.map_completed === 1);
      this.splitMapsToTiers();
    });
  }

  splitMapsToTiers() {
    let counts: TiersHashmap = {};

    for (const map of this.completedMaps) {
      if (!counts[map.map_tier]) {
        counts[map.map_tier] = 0;
      }
      counts[map.map_tier] += 1;
    }

    this.tierData = Object.keys(counts).map((tier) => ({
      tier: `Tier ${tier}`,
      count: counts[tier],
    }));

    this.barChartData = {
      labels: this.tierData?.map((map) => map.tier),
      datasets: [
        {
          data: this.tierData?.map((map) => map.count),
          backgroundColor: '#0d6efd',
          borderColor: 'none',
          color: 'white',
          hoverBackgroundColor: '#0b5ed7',
        },
      ],
    };

    this.doughnutChartData = {
      labels: this.tierData?.map((map) => map.tier),
      datasets: [
        {
          data: this.tierData?.map((map) => map.count),
          // backgroundColor: '#0d6efd',
          // backgroundColor: ['white', 'white', 'white'],
          borderColor: '#313133',
          color: 'white',
          // hoverBackgroundColor: ['green', 'red', 'black', 'white', 'yellow'],
        },
      ],
    };
  }
}
