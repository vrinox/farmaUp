angular.module('app')
.factory('Proveedores', ['$resource', function($resource){
  return $resource('/proveedor/:id', null, {
    'update': { method:'PUT' }
  });
}]);
