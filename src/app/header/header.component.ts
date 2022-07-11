import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  toggleMenu = true;
  winWidth = window.innerWidth;

  constructor() {}

  ngOnInit(): void {
    if (this.winWidth < 800) this.toggleMenu = false;
  }

  openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('closed');
    sidebar?.classList.add('opened');

    const body = document.querySelector('body');
    body?.classList.remove('enableScroll');
    body?.classList.add('disableScroll');
  }
}
