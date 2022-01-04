import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend-response-ondemand',
  templateUrl: './backend-response-ondemand.component.html',
  styleUrls: ['./backend-response-ondemand.component.scss']
})
export class BackendResponseOndemandComponent implements OnInit {
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