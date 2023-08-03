import { Component } from '@angular/core';

export interface Skill {
  img: string;
  title: string;
  porcentaje: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  panelOpenState:boolean = false;
  habilidadesFront: Skill[] = [
    { img: 'assets/imgs/logos/angular.png', title: 'Angular', porcentaje: 90 },
    { img: 'assets/imgs/logos/html.png', title: 'HTML', porcentaje: 100 },
    { img: 'assets/imgs/logos/css.png', title: 'CSS', porcentaje: 80 },
    { img: 'assets/imgs/logos/js.png', title: 'Javascript', porcentaje: 50 },
    { img: 'assets/imgs/logos/ts.png', title: 'TypeScript ', porcentaje: 80 },
    { img: 'assets/imgs/logos/bootstrap.svg', title: 'Bootstrap ', porcentaje: 60 },
  ];

  habilidadesBack: Skill[] = [
    { img: 'assets/imgs/logos/c.png', title: 'C#', porcentaje: 90 },
    { img: 'assets/imgs/logos/net.png', title: '.NET', porcentaje: 90 },
    { img: 'assets/imgs/logos/sql.png', title: 'SQL', porcentaje: 80 },
    { img: 'assets/imgs/logos/java.png', title: 'JAVA', porcentaje: 60 },
    { img: 'assets/imgs/logos/spring.png', title: 'Spring / Spring-Boot', porcentaje: 50 },
    { img: 'assets/imgs/logos/hibernate.png', title: 'Hibernate', porcentaje: 50 },
    { img: 'assets/imgs/logos/git.png', title: 'Git', porcentaje: 85 },
  ];
}
