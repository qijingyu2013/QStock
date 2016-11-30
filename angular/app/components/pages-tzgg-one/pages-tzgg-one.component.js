class PagesTzggOneController {
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

export const PagesTzggOneComponent = {
  templateUrl: './views/app/components/pages-tzgg-one/pages-tzgg-one.component.html',
  controller: PagesTzggOneController,
  controllerAs: 'vm',
  bindings: {}
}
