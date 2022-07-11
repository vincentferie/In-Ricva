import { Component } from '@angular/core';
import { TranslateService } from './translate-service/translate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ricva';
  defaultLanguage: string = "fr";

  constructor(
    private translate: TranslateService
  ) {
    this.translate.use(this.defaultLanguage)
  }
}
