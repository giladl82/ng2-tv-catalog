import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {TopRatedComponent} from '../shows/shows-list.component';

@Component({
    selector: 'tv-catalog',
    template: `
    <h1>Welcome to my catalog</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
    <shows take="4" genre="all"></shows>
    <router-outlet></router-outlet>
    `,
    directives: [TopRatedComponent]
})
export class CatalogHomeComponent implements OnInit {
    constructor(private _router: Router, private _routeParams: RouteParams) {
    }

    ngOnInit() {
    }
}