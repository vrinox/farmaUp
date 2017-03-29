angular.module('app')
.factory('Proveedores', ['$resource', function($resource){
  return $resource('/proveedores/:id', null, {
    'update': { method:'PUT' }
  });
}]);
