import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-kajita-subscriptions',
  templateUrl: './kajita-subscriptions.component.html',
  styleUrls: ['./kajita-subscriptions.component.scss']
})
export class KajitaSubscriptionsComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      var kushki = new KushkiCheckout({
        kformId: "h9DTvLtfc",
        form: "my-form",
        publicMerchantId: "d22d3935caf346df9cee6168eacaa0c3",
        inTestEnvironment: true,
        amount: {
          subtotalIva: 0,
          iva: 0,
          subtotalIva0: 5000,
        }
      });
    `;
    this._renderer2.appendChild(this._document.body, script);
  }

}
