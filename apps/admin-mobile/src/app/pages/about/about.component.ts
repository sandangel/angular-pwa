import {Meta, Title} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('About Page');
    this.meta.updateTag({name: 'description', content: 'This is the About Page'});
  }
}
