/**
 * Created by qijingyu on 2016-08-09.
 */
class NavBarController {
    constructor ($scope, $location) { //, $anchorScroll, $rootScope, ContextService,
        'ngInject'

        //let navBar = this
        //
        //ContextService.me(function (data) {
        //    navBar.userData = data
        //})

        $scope.gotoCustom = function($pos) {

            // 将location.hash的值设置为
            // 你想要滚动到的元素的id
            $location.hash($pos);
            //$anchorScroll.yOffset = 50;   // 总是滚动额外的50像素
            // 调用 $anchorScroll()
            //$anchorScroll();
        }
    }

    $onInit () {}
}

export const NavBarComponent = {
    templateUrl: './views/app/components/nav-bar/nav-bar.component.html',
    controller: NavBarController,
    controllerAs: 'vm',
    bindings: {}
}

