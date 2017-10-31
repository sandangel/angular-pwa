import {Meta, Title} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Home Page');
    this.meta.updateTag({name: 'description', content: 'This is the Home Page'});
  }
}
