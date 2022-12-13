import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Ilibros } from '../Ilibros';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
  
})
export class P1Component implements OnInit {
  titulo: string =""
  libro: Ilibros[]=[{
    Id: '1',
    Nombre: 'hola',
    Reseña: 'hola',
    Fecha_publicación:'hola',
    Imagen_Carátula: 'hola',
    Código_ISBN:'hola',
    Edición: 'hola',
    Nombre_y_dirección_editorial:'hola',
    Varios_escritores_con_nombre_y_nacionalidad_para_cada_uno: 'hola',
  }]
  constructor(
    private route: ActivatedRoute,
    ) { }
 
  ngOnInit(): void {
// this.route.queryParams.subscribe(libros=>{
  

// }
//   )

  


}
}