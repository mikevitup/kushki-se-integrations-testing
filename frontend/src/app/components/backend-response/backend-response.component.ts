import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend-response',
  templateUrl: './backend-response.component.html',
  styleUrls: ['./backend-response.component.scss']
})
export class BackendResponseComponent implements OnInit {
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
