import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Online learning landing page',
    img: '../../assets/shollp.png',
    link: 'https://shollp.netlify.app',
  },
  {
    name: 'Food POS Dark',
    img: '../../assets/shfpd.png',
    link: 'https://shfpd.netlify.app',
  },
  {
    name: 'Angular weather app',
    img: '../../assets/shawa.png',
    link: 'https://shngweather.netlify.app',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  faEye = faEye;

  constructor() {}

  ngOnInit(): void {}
}
