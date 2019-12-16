angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<',
    descriptions: '<',
    images: '<'
  },
  template: `
    <div ng-module='fish-pond' ng-repeat="fish in fishs">
      <fish-table-row> {{fishes}} </fish-table-row>
      <fish-table-row> {{fishes}} </fish-table-row>
      <fish-table-row> {{fishes}} </fish-table-row>
    </div>`
});