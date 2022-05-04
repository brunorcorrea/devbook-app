package router

import (
	"webapp/src/router/rotas"

	"github.com/gorilla/mux"
)

func Gerar() *mux.Router {
	return rotas.Configurar(mux.NewRouter())

}
