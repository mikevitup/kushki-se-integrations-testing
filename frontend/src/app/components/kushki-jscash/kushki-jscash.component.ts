import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-kushki-jscash',
  templateUrl: './kushki-jscash.component.html',
  styleUrls: ['./kushki-jscash.component.css']
})
export class KushkiJSCashComponent implements OnInit {

    constructor(
        private _renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {
        this.loadScript();
    }

    public loadScript(){
        return new Promise(resolve => {
        const scriptElement = document.createElement('script');
            scriptElement.src = '/assets/js/cash.js'
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

}
