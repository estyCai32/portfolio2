import { Component } from '@angular/core';
import { Empresa } from './proyect-card/proyect-card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  empresas:Empresa[] = [
    {
      title:"AESA",
      descripcion:"Formé parte del equipo que desarrolló la página web de AESA, además de un sistema de administración para gestionar los datos de la página principal, utilizando tecnologías como Angular, .NET y C#. En la actualidad, estoy liderando un proyecto interno que involucra estas mismas tecnologías, con el objetivo de mejorar aún más nuestros procesos internos.",
      link:"https://aesa.com.ar/",
      img:"assets/imgs/portfolio/logo2.png",
    },
    {
      title:"HELIX TURNO",
      descripcion:"Tuve la oportunidad de colaborar en un emocionante proyecto para Helix Turno, donde utilizamos Angular y .NET para desarrollar el sistema web. Además participe en la creacion de una página de back office destinada a la gestión interna y administración. Esta solución no solo mejoró la eficiencia operativa, sino que también optimizó la experiencia de uso interno.",
      link:"https://helixturno.com.ar/",
      img:"assets/imgs/portfolio/helix.png",
    },
    {
      title:"4R WEB",
      descripcion:"Mi primer proyecto en la empresa consistió en la creación de un sitio web para presentar nuestras impresoras 3D. Este proyecto tuvo un enfoque de aprendizaje, ya que me permitió familiarizarme con la tecnología Angular.",
      link:"https://impresoras4r.azurewebsites.net/",
      img:"assets/imgs/portfolio/4r.gif",
    },
    {
      title:"Coleccion CAI",
      descripcion:"Desarrollé una página web personal usando Angular y Firebase para administrar mi colección de camisetas. Utilicé Angular para crear una experiencia interactiva y Firebase para almacenar los datos de manera dinámica. ¡Ahora puedo organizar y mostrar mis camisetas de manera sencilla y atractiva en línea!",
      link:"https://coleccioncai-fe44a.web.app/",
      img:"assets/imgs/portfolio/cai.svg",
    },
  ]

}
