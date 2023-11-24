import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'portafolioVinii25';
  isScrolledDown = false;
  showArrow: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showArrow = event.url === '/';
      });
  }

  onDivScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollTop > 10) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }


}
