import { ElementRef, Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { KushkiService } from 'src/app/services/kushki.service';

@Component({
  selector: 'app-cajita-card-async',
  templateUrl: './cajita-card-async.component.html',
  styleUrls: ['./cajita-card-async.component.css']
})
export class CajitaCardAsyncComponent implements OnInit {

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
        merchant_id: "24ba5dd69e3e44b09511b29fa6b98c29",
        amount: "500",
        currency: "CLP",
        payment_methods:["card_async"],
        inTestEnvironment: true,
        return_url: "http://localhost:4200/return.html"
      });
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

}
