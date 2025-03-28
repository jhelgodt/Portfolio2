import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Angular.',
      role: 'Fullstack Developer',
      image: 'assets/projects/portfolio.jpg',
      githubLink: 'https://github.com/jhelgodt/portfolio',
      liveLink: 'https://joakimhelgodt.com/',
    },
    {
      title: 'Magic Deck Tracker',
      description: 'A card tracking app using Scryfall API.',
      role: 'Frontend Developer',
      image: 'assets/mtg-project.jpg',
      githubLink: 'https://github.com/jhelgodt/magic-deck-tracker',
      liveLink: '#',
    },
  ];
}
