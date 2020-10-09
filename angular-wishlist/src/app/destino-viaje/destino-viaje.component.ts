import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { destinoViaje } from '../models/destino-viaje.model';


@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: destinoViaje;
  /*este valor que es un string que está en esta variable,
  cuando este componente se renderee, se dibuje,
  con este HTML, y este HTML sea envuelto por ese tag ficticio,
  que vimos en Chrome recién que Angular genera,
  a ese tag ficticio se le va a poner en el atributo class,
  es decir, en el CSS, se le va a asignar este valor. */
  @HostBinding('attr.class') cssClass = 'col-md-4';
  //
  constructor() {}

  ngOnInit(): void {
  }

}
