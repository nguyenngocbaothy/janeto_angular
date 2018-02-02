import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
    name: String = 'Name Pipe';
    img: String = 'assets/ang.png';
    title: String = 'Angular Basic';

    constructor() { }

    ngOnInit() { }

    ShowName() {
        alert(this.title);
    }
}
