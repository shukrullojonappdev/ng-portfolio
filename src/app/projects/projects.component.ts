import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Simple react navigation',
    img: '',
    content: 'In this projects I use react, material ui',
    link: '',
  },
  {
    name: 'Nuxtjs portfolio project',
    img: '',
    content: '',
    link: 'https://shmportfolio.netlify.app',
  },
  {
    name: 'Angular weather app',
    img: '',
    content: '',
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
