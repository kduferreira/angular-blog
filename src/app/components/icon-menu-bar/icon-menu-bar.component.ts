import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-menu-bar',
  templateUrl: './icon-menu-bar.component.html',
  styleUrls: ['./icon-menu-bar.component.css']
})
export class IconMenuBarComponent {
  @Input()
  iconMenu:string = '';
}
