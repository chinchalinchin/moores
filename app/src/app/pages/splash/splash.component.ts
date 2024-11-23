import { 
  Component 
} from '@angular/core';

import { 
  Img 
} from '../../models';

interface Splash {
  alignment                   : String,
  id                          : String,
  h2                          : String,
  p                           : String,
  figcaption                  : String,
  img                         : Img
}

@Component({
  selector                    : 'app-splash',
  imports                     : [],
  templateUrl                 : './splash.component.html',
  styleUrl                    : './splash.component.scss'
})
export class SplashComponent {
  public h1 : String          = "William L. Moore"

  private splash : Splash[]   = [{
    alignment                 : "right",
    id                        : "splash-entrepreneur",
    h2                        : "Entrepreneur",
    p                         : "content",
    figcaption                : "Moore's Upholstery",
    img                       : {
      src                     : "TODO",
      alt                     : "Small Business Owner"
    }
  },{
    alignment                 : "left",
    id                        : "splash-artisan",
    h2                        : "Artisan",
    p                         : "content",
    figcaption                : "Seat Cover, YEAR",
    img                       : {
      src                     : "TODO",
      alt                     : "Award Winning Craftsmanship"
    }
  }, {
    alignment                 : "right",
    id                        : "splash-pilot",
    h2                        : "Pilot",
    p                         : "content",
    figcaption                : "Cessna Aircraft, YEAR",
    img                       : {
      src                     : "TODO",
      alt                     : "Licensed Aircraft Pilot"
    }
  }]

  public splashItems() : Splash[] {
    return this.splash;
  }
}
