const Pedido = (data, icone, titulo, descricao) => {
         return (
                  <div className="card">
                           <div className="card-header text-muted">{data}</div>
                                    <div className="card-body d-flex">
                                             <div className="d-flex align-itens-center">
                                                      <i classname={`${icone}`}></i>
                                             </div>
                                    </div>
                           </div>         
         )
}

export default Pedido