import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environment/environment';

@Injectable()
export class TranslateService {

  data: any = {};
  language = '';

  constructor(
    private http: HttpClient
  ) {}

  use(lang: string): Promise<{}> {
      console.log("language", lang)
    if (lang == '' || lang == undefined) {
      lang = "fr";
    }
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/languages/${lang}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {          
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}