import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

declare function init_plugins(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(
    private _settingService : SettingsService
  ) {
    this._settingService.cargarAjustes()
   }

  ngOnInit() {
    init_plugins();
  }

}
