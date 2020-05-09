import { Component, OnInit, Inject } from '@angular/core';

//Services
import { SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingServ: SettingsService) { 
  
  }

  ngOnInit() {
    this.colocarSeleccion();
  }

  changeColor(tema: string, link: any){

    this.settingServ.aplicarTema(tema);

    this.seleccionar(link);
    
  }

  seleccionar(link: any){
   
    let selectores: any = document.getElementsByClassName('selector');

    for( let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarSeleccion(){
    
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this.settingServ.ajustes.tema;

    for( let ref of selectores){
      if( ref.getAttribute('data-theme') == tema){
        ref.classList.add('working');
        break;
      }
      
    }

  }

}
