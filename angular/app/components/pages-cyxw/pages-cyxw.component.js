class PagesCyxwController {
  constructor ($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
    'ngInject'
    this.API = API
    this.$state = $state

    let Users = this.API.service('users')

    Users.getList()
  //
  }

  $onInit () {}
}

export const PagesCyxwComponent = {
  templateUrl: './views/app/components/pages-cyxw/pages-cyxw.component.html',
  controller: PagesCyxwController,
  controllerAs: 'vm',
  bindings: {}
}
