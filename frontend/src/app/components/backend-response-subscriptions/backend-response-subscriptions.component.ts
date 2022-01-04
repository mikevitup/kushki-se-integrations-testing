import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend-response-subscriptions',
  templateUrl: './backend-response-subscriptions.component.html',
  styleUrls: ['./backend-response-subscriptions.component.scss']
})
export class BackendResponseSubscriptionsComponent implements OnInit {
  tokenUrl = 'http://localhost:3000/token';
  tokenResponse: any = {};

  constructor(private http: HttpClient) {
    this.http.get(this.tokenUrl).subscribe(data => {
      this.tokenResponse = data;
    });
  }

  ngOnInit(): void {
  }
}