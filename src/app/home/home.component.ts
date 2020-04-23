import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getProducts() {
    console.log('get products');
    const apiName = 'shoppingappapi';
    const path = '/products-dev';
    const myInit = {
      headers: {},
      response: true,
      queryStringParameters: {}
    };
    API.get(apiName, path, myInit)
      .then((response) => {
        console.log(response);
        // Add your code here
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}
