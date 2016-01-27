import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {CatalogComponent} from './catalog/catalog.component';
import {ShowComponent} from './shows/show.component';

@Component({
    selector: 'tv-catalog-app',
    templateUrl: '/app/components/layout.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/catalog/...',
        name: 'Catalog',
        component: CatalogComponent,
        useAsDefault: true
    },
    {
        path: '/show/:show',
        name: 'Show',
        component: ShowComponent
    }
])
export class AppComponent {

   
}