import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  url="./assets/images/plant.jpg";
  url1="./assets/images/leafs.webp";
  url2="./assets/images/seed.png";
  url3="./assets/images/aa.jpeg";
 constructor() { }

  ngOnInit(): void {
  }

}
