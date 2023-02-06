import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
  }
  language:number=0;
  languages:string[]=["en", "fr"];
  
  public changeLang(){
    this.language++;

    if (this.language==this.languages.length){
      this.language=0;
    }
    this.translate.use(this.languages[this.language]);
  } 
 
}
