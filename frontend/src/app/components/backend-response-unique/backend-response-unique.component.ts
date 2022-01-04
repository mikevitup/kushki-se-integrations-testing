import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend-response-unique',
  templateUrl: './backend-response-unique.component.html',
  styleUrls: ['./backend-response-unique.component.scss']
})
export class BackendResponseUniqueComponent implements OnInit {
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