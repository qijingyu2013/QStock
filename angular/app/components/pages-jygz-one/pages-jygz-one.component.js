class PagesJygzOneController {
  constructor ($scope, $compile, API, $stateParams) {
    'ngInject'
    this.API = API
    // this.$state = $state

      let dataRowId = $stateParams.dataRowId
      let dataRow = API.service('inform-show', API.all('informs'))
      dataRow.one(dataRowId).get()
          .then((response) => {
          this.dataRes = API.copy(response)
          $scope.title = this.dataRes.data.title;
          $scope.content = this.dataRes.data.content;
          // $scope.article.htmlStr = '<p style="color:red;font-size=18px;">sdfsfsdfsdf</p>';
      })
  }

  $onInit () {}

}

export const PagesJygzOneComponent = {
  templateUrl: './views/app/components/pages-jygz-one/pages-jygz-one.component.html',
  controller: PagesJygzOneController,
  controllerAs: 'vm',
  bindings: {}
}
