import { RouteBodyClassComponent } from './directives/route-bodyclass/route-bodyclass.component'
import { PasswordVerifyClassComponent } from './directives/password-verify/password-verify.component'
import { CarouselClassComponent } from './directives/carousel/carousel.component'
angular.module('app.components')
  .directive('routeBodyclass', RouteBodyClassComponent)
  .directive('passwordVerify', PasswordVerifyClassComponent)
    .directive('carouselClass', CarouselClassComponent)
