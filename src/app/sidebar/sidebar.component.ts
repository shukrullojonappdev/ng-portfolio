import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faClose = faClose;

  constructor() {}

  ngOnInit(): void {}

  closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('opened');
    sidebar?.classList.add('closed');

    const body = document.querySelector('body');
    body?.classList.remove('disableScroll');
    body?.classList.add('enableScroll');
  }
}
