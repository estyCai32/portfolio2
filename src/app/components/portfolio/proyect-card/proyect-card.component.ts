import { Component, Input } from '@angular/core';

export interface Empresa{
  title:string;
  descripcion:string;
  link:string;
  img:string;
}

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.scss']
})
export class ProyectCardComponent {
  @Input()empresa!:Empresa;

  redirigir(url:string){
    window.open(url, "_blank");
  }
}
