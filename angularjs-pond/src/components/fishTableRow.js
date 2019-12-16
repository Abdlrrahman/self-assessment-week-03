angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name" name='$ctrl.fish.name'>{{ name }}</span>
      <span>
        <img img='$ctrl.fish.image' src={{ img }} />
      </span>
      <span class="fish-description" description='$ctrl.fish.description' ng-if="$ctrl.showDescription">{{  description }}</span>
    </div>`
});
