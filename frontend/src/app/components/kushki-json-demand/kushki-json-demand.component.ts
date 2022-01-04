import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-kushki-json-demand',
  templateUrl: './kushki-json-demand.component.html',
  styleUrls: ['./kushki-json-demand.component.css']
})
export class KushkiJSOnDemandComponent implements OnInit {

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
            scriptElement.src = '/assets/js/onDemand.js'
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

}
