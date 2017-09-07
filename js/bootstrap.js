(function () {
  angular.module('app', ['ngMaterial'])
    .run(() => {
      console.log('APP initialize')
    });

  window.onload = function () {
    angular.bootstrap(document.body, ['app']);
  };
})();
