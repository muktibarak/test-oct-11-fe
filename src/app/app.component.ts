import { Component, Inject, OnInit } from '@angular/core';
import { RewardsService } from './service/rewards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'test-app';
  rewards: any;

  constructor(private service: RewardsService) { }
  
  ngOnInit(): void {
    this.service.getRewards().subscribe(res => {
      this.rewards = res;
      console.log(res);
    });
  }
}
