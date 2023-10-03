import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULAR-UI-PORTFOLIO';

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title){}

    ngOnInit() {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => {
            // let route: ActivatedRoute = this.router.routerState.root;
            let routeTitle = '';
            while (this.route!.firstChild) {
              this.route = this.route.firstChild;
            }
            if (this.route.snapshot.data['title']) {
              routeTitle = this.route!.snapshot.data['title'];
            }
            return routeTitle;
          })
        )
        .subscribe((title: string) => {
          let myTitle = title;
          if (title) {
            this.titleService.setTitle(myTitle);
          }
        });
    }
}
