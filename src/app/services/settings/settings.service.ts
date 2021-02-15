import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor(@Inject(DOCUMENT) private documentI: Document ) {
   }

guardarAjustes(){
  localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
}

cargarAjustes(){

  if (localStorage.getItem('ajustes')){
    const ajus: string = localStorage.getItem('ajustes') || ''
    this.ajustes =  JSON.parse(ajus);

    this.aplicarTema(this.ajustes.tema);

  } else {
    this.aplicarTema(this.ajustes.tema);
  }

}

aplicCheck(link: any){
  const selectores: any = document.getElementsByClassName('selector');

  for (const ref of selectores){
      ref.classList.remove('working');
  }

  link.classList.add('working');
}

aplicarTema(tema: string){
    const url = `assets/css/colors/${ tema }.css`
    this.documentI.getElementById('tema')?.setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
}

colocarCheck(){
  const selectores: any = document.getElementsByClassName('selector');
  const tema = this.ajustes.tema;
  for (const ref of selectores){
    if (ref.getAttribute('data-theme') === tema){
      ref.classList.add('working');
      break
    }
  }
}

}


interface Ajustes {
  temaUrl: string
  tema: string
}
