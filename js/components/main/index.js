(function () {
  const templateString = `<div layout="column" style="height:100%;" ng-cloak>
  <section layout="row" flex>
    <md-sidenav class="md-sidenav-left" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')" md-whiteframe="4">
      <md-toolbar class="md-theme-indigo">
        <h1 class="md-toolbar-tools">Sidenav Left</h1>
      </md-toolbar>
      <md-content layout-padding>
        <md-button ng-click="close()" class="md-primary" hide-gt-md>
          Close Sidenav Left
        </md-button>
        <p hide show-gt-md>
          This sidenav is locked open on your device. To go back to the default behavior, narrow your display.
        </p>
      </md-content>
    </md-sidenav>
    <md-content flex layout-padding>
      <div layout="column" layout-align="top center">
        <div>
          <md-button ng-click="toggleLeft()" class="md-primary" hide-gt-md>
            Toggle left
          </md-button>
        </div>
      </div>
    </md-content>
  </section>
</div>`;


  angular.module('app')
    .component('home', {
      template: templateString,
      controller: function () {}
    });
})();
