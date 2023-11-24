import { Component, OnInit } from '@angular/core';
import { settingStar } from '../../interfaces/setting-star.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public stars: settingStar[] = []

  ngOnInit(): void {
    const containerWidth = 100; // Ancho del contenedor
    const containerHeight = 100; // Alto del contenedor

    for (let i = 0; i < 600; i++) {
      const animation = i < 300 ? true : false; // Alternar entre true y false
      const randomSize = `${Math.floor(Math.random() * 5) + 1}px`; // Tamaño aleatorio hasta 15px

      this.stars.push({
        top: Math.random() * containerHeight + "%",
        bottom: 'auto',
        left: Math.random() * containerWidth + "%",
        right: 'auto',
        fill: "#fff",
        size: randomSize,
        animation,
      });
    }
  }

}
