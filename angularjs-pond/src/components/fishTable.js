angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div ng-module='fish-pond' ng-repeat="fish in $ctrl.fishes">
      <fish-table-row fish="$ctrl.fishes"></fish-table-row>
    </div>`
});