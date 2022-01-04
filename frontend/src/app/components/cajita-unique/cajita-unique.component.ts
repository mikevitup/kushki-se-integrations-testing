import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-cajita-unique',
  templateUrl: './cajita-unique.component.html',
  styleUrls: ['./cajita-unique.component.scss']
})
export class CajitaUniqueComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      var kushki = new KushkiCheckout({
        form: "payment-form",
        merchant_id: "d22d3935caf346df9cee6168eacaa0c3",
        amount: {
          "subtotalIva": 0,
          "iva":0,
          "subtotalIva0": 50000
        },
        currency: "COP",
        payment_methods:["credit-card", "cash", "transfer"],
        inTestEnvironment: true
      });
    `;
    this._renderer2.appendChild(this._document.body, script);
  }

}
