import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import './Pedido'

const App = () => {
         return(
                           <div className='container border rounded mt-2 p-2'>
                           <div className='row border-bottom m-2'>
                                    <h1 className='display-5 text-center'>Seus pedidos</h1>
                           </div>

                           {/*Linha para primeiro pedido*/}
                           <div className="row">
                                    <div className="col-sm-8 col-md-6 m-2">
                                    {/*Aqui entra o primeiro pedido*/}
                                    </div>
                           </div>

                           </div>
         )               
}

ReactDOM.render(
         <App />,
         document.querySelector('#root')
         )