import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public _ajustes: SettingsService
    ) { }

  ngOnInit() {
    this._ajustes.colocarCheck()
  }

  cambiarColor( tema: string, link: any ) {
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck( link: any ) {

    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }
  
}
