import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-kushki-jstransfer',
  templateUrl: './kushki-jstransfer.component.html',
  styleUrls: ['./kushki-jstransfer.component.css']
})
export class KushkiJSTransferComponent implements OnInit {

    constructor(
        private _renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {
        this.loadScript();
        this.pseScript();
    }

    public loadScript(){
        return new Promise(resolve => {
        const scriptElement = document.createElement('script');
            scriptElement.src = '/assets/js/transfer.js'
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

    public pseScript(){
        return new Promise(resolve => {
        const scriptElement = document.createElement('script');
            scriptElement.src = '/assets/js/banksCL.js'
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

}
