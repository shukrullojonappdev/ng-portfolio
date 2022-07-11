import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Simple react navigation',
    img: '',
    content: 'In this projects I used react, material ui',
    link: 'https://shsdc.netlify.app',
  },
  {
    name: 'Nuxtjs portfolio project',
    img: '',
    content: 'Nustjs routing, carousel, navigation',
    link: 'https://shmportfolio.netlify.app',
  },
  {
    name: 'Angular weather app',
    img: '',
    content: 'This application shows weather selected place',
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
