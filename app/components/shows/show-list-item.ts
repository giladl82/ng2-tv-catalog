import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {Show} from '../common/tv-catalog.service';

@Component({
    selector: 'show-list-item',
    styles: [`
        div {
            position:relative;
        }
        h3 {
            position: absolute;
            top: 0;
            left: 5px;
            color:#111;
            background-color: rgba(221,221,221, 0.5);
        }
        img { 
                max-height:317px;
                width: 214px;
                margin-bottom:30px;
            }
    `],
    template: ` 
        <div (click)="goToShowPage()">
            <img [src]="show.image" class="img-responsive">
            <h3>{{show.name}}</h3>
        </div>
    `
})
export class ShowListItemComponent {
    @Input() show: Show;

    constructor(private _router: Router) { }

    goToShowPage() {
        console.log(this.show.name);
        this._router.parent.navigate(['Show', { show: this.show.name }]);
    }
}