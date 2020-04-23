import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onLoginClick() {
    const url =
      'https://shopping-app.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=2mtu3gidvshek4dn5fnf3dljct&redirect_uri=http://localhost:4200';

    window.location.assign(url);
  }
}
