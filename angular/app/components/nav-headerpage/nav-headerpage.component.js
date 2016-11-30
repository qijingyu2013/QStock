/**
 * Created by qijingyu on 2016-08-09.
 */
class NavHeaderpageController {
    constructor ($rootScope, ContextService) {
        'ngInject'

        let navHeaderpage = this

        ContextService.me(function (data) {
            navHeaderpage.userData = data
        })
    }

    $onInit () {}
}

export const NavHeaderpageComponent = {
    templateUrl: './views/app/components/nav-headerpage/nav-headerpage.component.html',
    controller: NavHeaderpageController,
    controllerAs: 'vm',
    bindings: {}
}

