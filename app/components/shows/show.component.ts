import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {CatalogService, Show} from '../common/tv-catalog.service';


@Component({
    styles: [`
        img {float:left; margin-right: 15px;}
        .description {height: 180px; overflow:auto;}
        .imdb-button {border:solid 2px #000; color:#000; background-color:#E3B81F; border-radius: 8px; padding:5px 8px; text-decoration:none;}
        .imdb-button:hover {border:solid 2px #666; color:#666; background-color:#EDCF50;}
    `],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <a [routerLink]="['Catalog', 'Genre', {genre: show.genreName}]">&lt;&lt; Back</a>
            </div>
            <div class="panel-body">                    
                <img [src]="show.image">
                <h1>{{showName}} ({{show.startYear}} - {{show.endYear}})</h1>    
                <p class="description">{{show.description}}</p>
                <p>Rate: {{show.rate}}</p>
                <p><a class="imdb-button" [href]="show.imdbLink" target="_blank" title="See more info on IMDB">IMDB</a></p>
            </div>
        </div>
    `,
    providers: [CatalogService],
    directives: [ROUTER_DIRECTIVES]
})
export class ShowComponent implements OnInit {
    showName: string;
    show: Show;
    constructor(private _catalogService: CatalogService, private _routeParams: RouteParams) {
        this.showName = unescape(_routeParams.get('show'));
        this.show = new Show();
    }

    ngOnInit() {
        this._catalogService.getShowData(this.showName).subscribe(show => {
            this.show = show

            console.log(this.show);
        });
    }
}

// 