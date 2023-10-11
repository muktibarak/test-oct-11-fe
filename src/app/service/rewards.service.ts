import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private url = 'http://localhost:8082/api/v1/rewards/all-rewards';
  userName: any;
  userEmail: any;
  amountSpent: any;
  rewardsPoint: any;

  constructor(private http: HttpClient) { }

  getRewards() {
    return this.http.get(this.url);
  }

  postRewards() {
    this.http.post<any>('http://localhost:8082/api/v1/rewards/post-new-reward', {
      userName: this.userName,
      userEmail: this.userEmail,
      amountSpent: this.amountSpent,
      rewardsPoint: this.rewardsPoint
    });
  }

 
}
