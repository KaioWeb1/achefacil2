var achefacil = angular.module("achefacil",['ngRoute','ui.map','ui.event']).config(function($routeProvider){
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
		})
		.when("/adv/:id",{
			templateUrl:"templates/advocacia-emp.html",
			controller:"AdvId"
		})
		.when("/animais/",{
			templateUrl:"templates/animais.html",
			controller:"Animais"
		})
		.when("/animais/:id",{
			templateUrl:"templates/animais-emp.html",
			controller:"AnimaisId"
		})
		.when("/auto/",{
			templateUrl:"templates/auto.html",
			controller:"Auto"
		})
		.when("/auto/:id",{
			templateUrl:"templates/auto-emp.html",
			controller:"AutoId"
		})
		.when("/casa/",{
			templateUrl:"templates/casa.html",
			controller:"Casa"
		})
		.when("/casa/:id",{
			templateUrl:"templates/casa-emp.html",
			controller:"CasaId"
		})
		.when("/contabilidade/",{
			templateUrl:"templates/contabilidade.html",
			controller:"Contabilidade"
		})
		.when("/contabilidade/:id",{
			templateUrl:"templates/contabilidade-emp.html",
			controller:"ContabilidadeId"
		})
		.when("/diversos/",{
			templateUrl:"templates/diversos.html",
			controller:"Diversos"
		})
		.when("/diversos/:id",{
			templateUrl:"templates/diversos-emp.html",
			controller:"DiversosId"
		})
		.when("/educacao/",{
			templateUrl:"templates/educacao.html",
			controller:"Educacao"
		})
		.when("/educacao/:id",{
			templateUrl:"templates/educacao-emp.html",
			controller:"EducacaoId"
		})
		.when("/entretenimento/",{
			templateUrl:"templates/entretenimento.html",
			controller:"Entrenimento"
		})
		.when("/entretenimento/:id",{
			templateUrl:"templates/entretenimento-emp.html",
			controller:"EntrenimentoId"
		})
		.when("/gastronomia/",{
			templateUrl:"templates/gastronomia.html",
			controller:"Gastronomia"
		})
		.when("/gastronomia/:id",{
			templateUrl:"templates/gastronomia-emp.html",
			controller:"GastronomiaId"
		})
		.when("/livrarias/",{
			templateUrl:"templates/livrarias.html",
			controller:"Livrarias"
		})
		.when("/livrarias/:id",{
			templateUrl:"templates/livrarias-emp.html",
			controller:"LivrariasId"
		})
		.when("/moda/",{
			templateUrl:"templates/moda.html",
			controller:"Moda"
		})
		.when("/moda/:id",{
			templateUrl:"templates/moda-emp.html",
			controller:"ModaId"
		})
		.when("/saude/",{
			templateUrl:"templates/saude.html",
			controller:"Saude"
		})
		.when("/saude/:id",{
			templateUrl:"templates/saude-emp.html",
			controller:"SaudeId"
		}).otherwise({
			redirectTo:"/categorias"	
		});
//fastclick
}).run(function () {
    FastClick.attach(document.body);
});




// .config([function('GoogleApi']) {
//     uiGmapGoogleMapApiProvider.configure({
//         key: 'AIzaSyBITR00BvvVwqP_1aI3Rf7tONeXrDyuW5Q',
//         v: '3.17',
//         libraries: 'weather,geometry,visualization'
//     });
// });

achefacil.controller('Adv', function($scope, Adv, $window){
		$scope.adv = {}
		Adv.getAdv(function(data){			
			$scope.adv = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});

achefacil.controller('AdvId', function($scope, $filter, $routeParams, $window, Adv){
	$scope.id = $routeParams.id;


	var myfilter = $filter;
	Adv.getAdv(function(data){
		$scope.advid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];

		
	})
	


	var ll = new google.maps.LatLng($scope.advid.latitude, $scope.advid.longitude);
    $scope.mapOptions = {
        center: ll,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Markers should be added after map is loaded
    $scope.onMapIdle = function() {
        if ($scope.myMarkers === undefined){    
            var marker = new google.maps.Marker({
                map: $scope.myMap,
                position: ll
            });
            $scope.myMarkers = [marker, ];
        }
    };

    $scope.markerClicked = function(m) {
  
    };


   $scope.doTheBack = function() {
	  window.history.back();
	};





});


achefacil.controller('Animais', function($scope, Animais, $window){
		$scope.animais = {}
		Animais.getAnimais(function(data){			
			$scope.animais = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});

achefacil.controller('AnimaisId', function($scope,$filter ,$routeParams, $window, Animais){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Animais.getAnimais(function(data){
		$scope.animaisid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});


achefacil.controller('Auto', function($scope, Auto, $window){
		$scope.auto = {}
		Auto.getAuto(function(data){			
			$scope.Auto = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('AutoId', function($scope,$filter ,$routeParams, $window, Auto){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Auto.getAuto(function(data){
		$scope.autoid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});

achefacil.controller('Casa', function($scope, Casa, $window){
		$scope.casa = {}
		Casa.getCasa(function(data){			
			$scope.casa = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('CasaId', function($scope, $window, $routeParams, $filter, Casa){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Casa.getCasa(function(data){
		$scope.casaid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});

achefacil.controller('Contabilidade', function($scope, Contabilidade, $window){
		$scope.contabilidade = {}
		Contabilidade.getContabilidade(function(data){			
			$scope.contabilidade = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('ContabilidadeId', function($scope,$filter ,$routeParams, $window, Contabilidade){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Contabilidade.getContabilidade(function(data){
		$scope.contabilidadeid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});

achefacil.controller('Diversos', function($scope, Diversos, $window){
		$scope.diversos = {}
		Diversos.getDiversos(function(data){			
			$scope.diversos = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('DiversosId', function($scope,$filter ,$routeParams, $window, Diversos){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Diversos.getDiversos(function(data){
		$scope.diversosid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});


achefacil.controller('Educacao', function($scope, Educacao, $window){
		$scope.educacao = {}
		Educacao.getEducacao(function(data){			
			$scope.educacao = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});

achefacil.controller('EducacaoId', function($scope,$filter ,$routeParams, $window, Educacao){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Educacao.getEducacao(function(data){
		$scope.educacaoid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})
	$scope.doTheBack = function() {
	  window.history.back();
	};
});


achefacil.controller('Entrenimento', function($scope, Entrenimento, $window){
		$scope.entretenimento = {}
		Entrenimento.getEntretenimento(function(data){			
			$scope.entretenimento = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});

achefacil.controller('EntrenimentoId', function($scope,$filter ,$routeParams, $window, Entrenimento){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Entrenimento.getEntretenimento(function(data){
		$scope.entretenimentoid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});



achefacil.controller('Gastronomia', function($scope, Gastronomia, $window){
		$scope.gastronomia = {}
		Gastronomia.getGastronomia(function(data){			
			$scope.gastronomia = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('GastronomiaId', function($scope,$filter ,$routeParams, $window, Gastronomia){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Gastronomia.getGastronomia(function(data){
		$scope.gastronomiaid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});

achefacil.controller('Livrarias', function($scope, Livrarias, $window){
		$scope.livrarias = {}
		Livrarias.getLivrarias(function(data){			
			$scope.livrarias = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('LivrariasId', function($scope,$filter ,$routeParams, $window, Livrarias){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Livrarias.getLivrarias(function(data){
		$scope.livrariasid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});


achefacil.controller('Moda', function($scope, Moda, $window){
		$scope.moda = {}
		Moda.getModa(function(data){			
			$scope.moda = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('ModaId', function($scope,$filter ,$routeParams, $window, Moda){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Moda.getModa(function(data){
		$scope.modaid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

});



achefacil.controller('Saude', function($scope, Saude, $window){
		$scope.saude = {}
		Saude.getSaude(function(data){			
			$scope.saude = data;	
		})
	$scope.doTheBack = function() {
		  window.history.back();
	};
});
achefacil.controller('SaudeId', function($scope,$filter ,$routeParams, $window, Saude){
	$scope.id = $routeParams.id;
	var myfilter = $filter;
	Saude.getSaude(function(data){
		$scope.saudeid = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];	
	})

	$scope.doTheBack = function() {
	  window.history.back();
	};

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




achefacil.controller('Categoria', function($scope, Categoria){
	
	$scope.categorias = {}
	Categoria.getCategoria(function(data){
		$scope.categorias = data;	
	})



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
achefacil.factory('Animais', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getAnimais:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/animais.json'
				}).success(function(data){
					obj.saveAnimais(data);
					callback(data);	
				});
			}
		},

		saveAnimais:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})

achefacil.factory('Auto', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getAuto:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/auto.json'
				}).success(function(data){
					obj.saveAuto(data);
					callback(data);	
				});
			}
		},

		saveAuto:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Casa', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getCasa:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/casa.json'
				}).success(function(data){
					obj.saveCasa(data);
					callback(data);	
				});
			}
		},

		saveCasa:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Contabilidade', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getContabilidade:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/contabilidade.json'
				}).success(function(data){
					obj.saveContabilidade(data);
					callback(data);	
				});
			}
		},

		saveContabilidade:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Diversos', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getDiversos:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/diversos.json'
				}).success(function(data){
					obj.saveDiversos(data);
					callback(data);	
				});
			}
		},

		saveDiversos:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Educacao', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getEducacao:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/educacao.json'
				}).success(function(data){
					obj.saveEducacao(data);
					callback(data);	
				});
			}
		},

		saveEducacao:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Entrenimento', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getEntretenimento:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/entretenimento.json'
				}).success(function(data){
					obj.saveEntretenimento(data);
					callback(data);	
				});
			}
		},

		saveEntretenimento:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})

achefacil.factory('Gastronomia', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getGastronomia:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/gastronomia.json'
				}).success(function(data){
					obj.saveGastronomia(data);
					callback(data);	
				});
			}
		},

		saveGastronomia:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})

achefacil.factory('Livrarias', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getLivrarias:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/livrarias.json'
				}).success(function(data){
					obj.saveLivrarias(data);
					callback(data);	
				});
			}
		},

		saveLivrarias:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Moda', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getModa:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/moda.json'
				}).success(function(data){
					obj.saveModa(data);
					callback(data);	
				});
			}
		},

		saveModa:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})
achefacil.factory('Saude', function($http){

	var servicosList;
	var obj = {};

	obj = {
		getSaude:function(callback){
			if (servicosList){
				callback(servicosList);
				return false;
			}else{
				$http({
					method:'GET',
					url:'data/saude.json'
				}).success(function(data){
					obj.saveSaude(data);
					callback(data);	
				});
			}
		},

		saveSaude:function(data){
			servicosList = data;
		}
		
	}


	return obj;
})

