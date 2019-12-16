angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div ng-module='fish-pond' ng-repeat="fish in fishes">
      <fish-table-row> {{fish}} </fish-table-row>
    </div>`
});