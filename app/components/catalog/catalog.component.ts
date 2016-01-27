import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CatalogHomeComponent} from './catalog-home.component';
import {GenreComponent} from './genre.component';

@Component({
    selector: 'tv-catalog',
    template: `
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Catalog', component: CatalogHomeComponent, useAsDefault: true },
    { path: '/:genre', name: 'Genre', component: GenreComponent }
])
export class CatalogComponent {

    constructor() {
    }
}