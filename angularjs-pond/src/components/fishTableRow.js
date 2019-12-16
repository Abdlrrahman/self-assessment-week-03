angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<',
    description: '<',
    image: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name" ng-repeat="fis in fish">{{ fis }}</span>
      <span>
        <img ng-repeat="img in image" src={{ img }} />
      </span>
      <span class="fish-description" ng-repeat="des in description" ng-if="des in description">{{ des }}</span>
    </div>`
});
