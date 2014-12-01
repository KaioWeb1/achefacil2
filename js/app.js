var achefacil = angular.module("achefacil",['ngRoute']).config(function($routeProvider){
		$routeProvider
		.when("/categorias/",{
			templateUrl:"templates/categorias.html",
			controller:"Categoria"
		})
		.when("/servicos/",{
			templateUrl:"templates/servicos.html",
			controller:"Servicos"
		})
		.when("/servicos/:id",{
			templateUrl:"templates/empresa.html",
			controller:"Empresa"
		})
		.when("/sobre/",{
			templateUrl:"templates/sobre.html",
			controller:"Sobre"
		})
		.when("/adv/",{
			templateUrl:"templates/advocacia.html",
			controller:"Adv"
		}).otherwise({
			redirectTo:"/categorias"	
		});
//fastclick
}).run(function () {
    FastClick.attach(document.body);
});


achefacil.controller('Adv', function($scope, Adv, $window){
		$scope.adv = {}
		Adv.getAdv(function(data){			
			$scope.adv = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};

});

achefacil.controller('Categoria', function($scope, Categoria){
	
	$scope.categorias = {}
	Categoria.getCategoria(function(data){
		$scope.categorias = data;	
	})



});

achefacil.controller('Servicos', function($scope, Servicos, $window, $routeParams){
		$scope.servicos = {}
		Servicos.getServicos(function(data){			
			$scope.servicos = data;	
		})

	$scope.servicos.currentCategoria = null;
		
	

	

	function setCurrentCategoria(categoria){
		console.log("setCurrentCategoria "+ categoria);
		$scope.servicos.currentCategoria = categoria;
	}

	$scope.servicos.setCurrentCategoria = setCurrentCategoria;


	$scope.doTheBack = function() {
		  window.history.back();
	};

});

achefacil.controller('Empresa', function($scope,$filter ,$routeParams,$window, Servicos){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Servicos.getServicos(function(data){
		$scope.empresa = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});


achefacil.controller('Sobre', function($scope){


	$scope.doTheBack = function() {
		  window.history.back();
	};	
	
})



achefacil.factory('Categoria', function($http){

	var categoriaList;
	var obj = {};

	obj = {
		getCategoria:function(callback){
			if (categoriaList){
				callback(categoriaList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/categorias.json'
				}).success(function(data){
					obj.saveCategoria(data);
					callback(data);	
				});
			}
		},

		saveCategoria:function(data){
			categoriaList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Servicos', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getServicos:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/servicos.json'
				}).success(function(data){
					obj.saveCategoria(data);
					callback(data);	
				});
			}
		},

		saveCategoria:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})

achefacil.factory('Adv', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getAdv:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/adv.json'
				}).success(function(data){
					obj.saveAdv(data);
					callback(data);	
				});
			}
		},

		saveAdv:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})