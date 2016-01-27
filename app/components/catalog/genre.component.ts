import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {CatalogService, Show} from '../common/tv-catalog.service';
import {TopRatedComponent} from './shows-list.component';

@Component({
    styles: [`
        .active {
            background-color:yellow;
        }
    `],
    template: `
    <h1>{{genreName | uppercase}}</h1>
    <p> Show By: 
        <a [ngClass]="listOrder === 'top' ? 'active' : ''" [routerLink]="['Genre', { genre: genreName, order: 'top' }]">Top Rated</a>      
        | 
        <a [ngClass]="listOrder === 'a-z' ? 'active' : ''"  [routerLink]="['Genre', { genre: genreName, order: 'a-z' }]">A-Z</a>
        | 
        <a [ngClass]="listOrder === 'z-a' ? 'active' : ''"  [routerLink]="['Genre', { genre: genreName, order: 'z-a' }]">Z-A</a>
        | 
        <a [ngClass]="listOrder === 'newest' ? 'active' : ''"  [routerLink]="['Genre', { genre: genreName, order: 'newest' }]">Newest</a>
        | 
        <a [ngClass]="listOrder === 'oldest' ? 'active' : ''"  [routerLink]="['Genre', { genre: genreName, order: 'oldest' }]">Oldest</a> 
    </p>
    
    <shows take="100" [genre]="genreName" [order]="listOrder"></shows>
    `,
    directives: [ROUTER_DIRECTIVES, TopRatedComponent],
    providers: [CatalogService]
})

export class GenreComponent implements OnInit {
    genreName: string; 
    listOrder: string;

    shows: Show[];

    constructor(private _routeParams: RouteParams, private _catalogService: CatalogService) {
        this.genreName = this._routeParams.get('genre');
        this.listOrder = this._routeParams.get('order');

        if (!this.listOrder) {
            this.listOrder = 'top';
        }
    }

    ngOnInit() {
       
    }
}

