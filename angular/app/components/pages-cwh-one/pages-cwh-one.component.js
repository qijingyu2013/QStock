class PagesCwhOneController {
  constructor ($scope, $compile, API, $stateParams) {
    'ngInject'
    this.API = API

      let dataRowId = $stateParams.dataRowId
      let dataRow = API.service('inform-show', API.all('informs'))
      dataRow.one(dataRowId).get()
          .then((response) => {
          this.dataRes = API.copy(response)
          $scope.title = this.dataRes.data.title;
          $scope.content = this.dataRes.data.content;
      })
  }

  $onInit () {}

}

export const PagesCwhOneComponent = {
  templateUrl: './views/app/components/pages-cwh-one/pages-cwh-one.component.html',
  controller: PagesCwhOneController,
  controllerAs: 'vm',
  bindings: {}
}
