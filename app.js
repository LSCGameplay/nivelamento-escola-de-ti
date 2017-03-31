var app = angular.module("app", ['ngRoute'])

app.controller("produtoController", produtoController)

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "menu.htm"
  })
  .when("/manterProduto", {
    templateUrl : "manterProduto.htm", controller : "produtoController"
  })
  .when("/efetuarPedido", {
    templateUrl : "efetuarPedido.htm", controller : "produtoController"
  })
  .when("/manterProduto/editarProduto", {
    templateUrl : "editarProduto.htm", controller : "produtoController"
  });
});

function produtoController($scope) {
	$scope.produto = {};
	$scope.produtos = [];

	$scope.salvar = function(produto) {
		var copiaProduto = angular.copy(produto);
		$scope.produtos.push(copiaProduto);

		console.log(produto.codigo + "\n" + produto.nome + "\n" +  produto.preco);

		$scope.produto = {};
	}

	$scope.alterar = function(produto) {
		produto.codigo = prompt("Digite o novo codigo:" , produto.codigo);
		produto.nome   = prompt("Digite o novo nome:" 	, produto.nome  );
		produto.preco  = prompt("Digite o novo preco:" 	, produto.preco );

		console.log(produto.codigo + "\n" + produto.nome + "\n" +  produto.preco);

	}

	$scope.excluir = function(produto) {
		var pos = $scope.produtos.indexOf(produto);

		$scope.cores.splice(pos, 1);
	}
}