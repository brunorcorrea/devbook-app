package rotas

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Rota struct {
	URI                string
	Metodo             string
	Funcao             func(w http.ResponseWriter, r *http.Request)
	RequerAutenticacao bool
}

func Configurar(router *mux.Router) *mux.Router {
	rotas := rotasLogin

	for _, rota := range rotas {
		router.HandleFunc(rota.URI, rota.Funcao).Methods(rota.Metodo)
	}

	fileServer := http.FileServer(http.Dir("./assets/"))
	router.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", fileServer))

	return router
}