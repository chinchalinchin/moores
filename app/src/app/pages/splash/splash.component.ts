import { 
  Component 
} from '@angular/core';

import { 
  Img 
} from '../../models';

interface Splash {
  id                          : String,
  class                       : String,
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
  public h1 : String          = "William L. Moore, 1937 - 2023"

  public splash : Splash[]    = [{
    id                        : "splash-entrepreneur",
    class                     : "left",
    h2                        : "Entrepreneur",
    p                         : "content",
    figcaption                : "Moore's Upholstery",
    img                       : {
      src                     : "TODO",
      alt                     : "Small Business Owner"
    }
  },{
    id                        : "splash-artisan",
    class                     : "right",
    h2                        : "Artisan",
    p                         : "content",
    figcaption                : "Seat Cover, YEAR",
    img                       : {
      src                     : "TODO",
      alt                     : "Award Winning Craftsmanship"
    }
  }, {
    id                        : "splash-pilot",
    class                     : "left",
    h2                        : "Pilot",
    p                         : "content",
    figcaption                : "Cessna Aircraft, YEAR",
    img                       : {
      src                     : "TODO",
      alt                     : "Licensed Aircraft Pilot"
    }
  }]
}
