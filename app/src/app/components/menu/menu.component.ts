import { Component } from '@angular/core';

interface MenuItem {
  id                        : String,
  content                   : String,
  href                      : String
}

@Component({
  selector                  : 'app-menu',
  imports                   : [],
  templateUrl               : './menu.component.html',
  styleUrl                  : './menu.component.scss'
})
export class MenuComponent {
  private menu : MenuItem[] = [{
    id                      : "menu-home",
    content                 : "Home",
    href                    : "/"
  }, {
    id                      : "menu-about",
    content                 : "About",
    href                    : "/about"
  }, {
    id                      : "menu-estate",
    content                 : "Estate",
    href                    : "/estate"
  }]

  public menuItems() : MenuItem[] {
    return this.menu
  }
}
