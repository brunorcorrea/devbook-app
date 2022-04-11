package rotas

import "net/http"

var rotaLogin = Rota {
	Uri: "/login",
	Metodo: http.MethodPost,
	Funcao: func(w http.ResponseWriter, r *http.Request) {

	},
	RequerAutenticacao: false,
}