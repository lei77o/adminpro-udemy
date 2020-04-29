import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  
  @Input('nombre') leyenda: string ="Leyenda";
  @Input() porcentaje: number = 50;
  
  @Output() cambiarPorcentaje: EventEmitter<number> = new EventEmitter();
  
  @ViewChild('intProgress', {static: false}) intProgress : ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( newValue : number){

    //let elemHTML: any = document.getElementsByName('porcentaje')[0];  



    if( newValue >= 100){
      this.porcentaje = 100;
    }
    else if ( newValue <=0 ){
      this.porcentaje = 0;   
    }
    else {
      this.porcentaje = newValue;  
    }

    //elemHTML.value = Number(this.porcentaje);
    this.intProgress.nativeElement.value = this.porcentaje;

    this.cambiarPorcentaje.emit( this.porcentaje ); 

    this.intProgress.nativeElement.focus();

  }

  cambiarValor( valor : number ){

    if (this.porcentaje >= 100 && valor > 0)
    {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }
    
    this.porcentaje = this.porcentaje + valor;
    this.cambiarPorcentaje.emit( this.porcentaje );

  }


}
