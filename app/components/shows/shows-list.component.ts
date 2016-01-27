import {Component, Input, Output, OnInit} from 'angular2/core';

import {CatalogService, Show} from '../common/tv-catalog.service';
import {ShowListItemComponent} from './show-list-item';


@Component({
    selector: 'shows',
    styles: [`
        .panel-body {
            display: flex;
            justify-content: center;
            -ms-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            align-items: stretch;
        }

        .panel-body div {
            margin: 7.5px;
        }

    `],
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                <i class="fa" [ngClass]="genre"></i>
                {{genre | uppercase}}
            </h3>
        </div>
        <div class="panel-body">
            <div *ngFor="#show of topShows">
                <show-list-item [show]="show"></show-list-item>
            </div>
        </div>
    </div>
    `,
    providers: [CatalogService],
    directives: [ShowListItemComponent]
})

export class TopRatedComponent implements OnInit {
    @Input() take: number;
    @Input() genre: string;
    @Input() order: string;

    topShows: Show[];

    constructor(private _catalogService: CatalogService) {

    }

    ngOnInit() {
        this._catalogService.getTopRated(this.take, this.genre, this.order).subscribe(data => {
            this.topShows = data;
        });
    }
}