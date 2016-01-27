import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class Genre {
    name: string;
    shows: Show[];
}

export class Show {
    name: string;
    image: string;
    startYear: number;
    endYear: number;
    rate: number;
    description: string;
    genreName: string
}

@Injectable()
export class CatalogService {
    private geners: Genre;

    constructor(public http: Http) {
    }

    private getAllShows() {
        return Observable.create(observer => {
            this.http.get('/app/assets/json/data.json')
                // Call map on the response observable to parse the data
                .map(res => {
                    //console.log('map', res.json());

                    return res.json()
                })
                // Subscribe to the observable to get the parsed data object
                .subscribe(data => {
                    this.geners = data;

                    observer.next(data);
                    observer.complete();
                });
        });
    }

    getTopRated(top: number, genre: string = 'all', order: string = 'top') {
        return Observable.create(observer => {
            this.getAllShows().subscribe(data => {
                var arr = [];
                if (genre === 'all') {
                    data.map(genre => {
                        arr = arr.concat(genre.shows);
                    });

                    data = arr;
                } else {
                    console.log('service', genre);
                    data = data.filter(d => d.name === genre)[0];
                    if (data) {
                        data = data.shows;
                    }
                }
               
                switch (order) {
                    case 'a-z':
                        data = data.sort(function (a, b) {
                            if (a.name > b.name) return 1;
                            return -1;
                        });
                        break;
                    case 'z-a':
                        data = data.sort(function (a, b) {
                            if (a.name < b.name) return 1;
                            return -1;
                        });
                        break;
                    case 'newest':
                        data = data.sort(function (a, b) {
                            return b.startYear - a.startYear;
                        });
                        break;
                    case 'oldest':
                        data = data.sort(function (a, b) {
                            return a.startYear - b.startYear;
                        });
                        break;
                    case 'top':
                    default:
                        data = data.sort(function (a, b) {
                            return b.rate - a.rate;
                        });
                        break;
                }         
                
                if (data.length > top) {
                    data = data.slice(0, top);
                }   

                observer.next(data);
                observer.complete();
            });
        });
    }

    getShowData(showName: string) {
        return Observable.create(observer => {
            this.getAllShows().subscribe(data => {
                var arr = [];

                data.forEach(g => {
                    var temp;

                    temp = g.shows.filter(s => s.name === showName)[0];

                    if (temp) {
                        data = temp;
                        console.log(data);

                        data.genreName = g.name;                        
                    }
                });

                observer.next(data);
                observer.complete();
                
            });
        });
    }
}
