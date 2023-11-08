import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-small-card',
  templateUrl: './white-small-card.component.html',
  styleUrls: ['./white-small-card.component.css']
})
export class WhiteSmallCardComponent {
  @Input()
  photoCover:string = '';
  @Input()
  whitetitle:string = '';
  @Input()
  whiteDescription: string = '';
  @Input()
  Id:string ='0'
}
