import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() nav: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navigate(feature: string) {
    this.nav.emit(feature);
  }
}
