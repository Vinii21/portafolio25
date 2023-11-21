import { Component } from '@angular/core';
import { settingStar } from '../../interfaces/setting-star.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public stars: settingStar[] = [
    {
      top: "20px",
      bottom: "none",
      left: "100px",
      right: "none",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "none",
      bottom: "60px",
      left: "300px",
      right: "none",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "100px",
      bottom: "none",
      left: "none",
      right: "60px",
      fill: "#fff",
      size: "25px"
    },
    {
      top: "40px",
      bottom: "none",
      left: "none",
      right: "360px",
      fill: "#fff",
      size: "10px"
    },
    {
      top: "20px",
      bottom: "none",
      left: "360px",
      right: "none",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "80px",
      bottom: "none",
      left: "180px",
      right: "none",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "none",
      bottom: "30px",
      left: "30px",
      right: "none",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "none",
      bottom: "30px",
      left: "none",
      right: "140px",
      fill: "#fff",
      size: "20px"
    },
    {
      top: "none",
      bottom: "70px",
      left: "none",
      right: "280px",
      fill: "#fff",
      size: "25px"
    },
  ];

}
