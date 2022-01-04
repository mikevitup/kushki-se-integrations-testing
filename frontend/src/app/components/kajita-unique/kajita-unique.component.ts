import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-kajita-unique',
  templateUrl: './kajita-unique.component.html',
  styleUrls: ['./kajita-unique.component.scss']
})
export class KajitaUniqueComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      var kushki = new KushkiCheckout({
        kformId: "hn5uqm88T",
        form: "my-form",
        publicMerchantId: "d22d3935caf346df9cee6168eacaa0c3",
        inTestEnvironment: true,
        amount: {
          subtotalIva: 0,
          iva: 0,
          subtotalIva0: 50000,
        }
      });
    `;
    this._renderer2.appendChild(this._document.body, script);
  }

}
