import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome/css/all.css;'

const App = () => {
         return(
                  //Um componente
                   <div className='container border rounded mt-2 p-2'>
                           <div className='row border-bottom m-2'>
                                    <h1 className='display-5 text-center'>Seus pedidos</h1>
                           </div>


                  </div>
         )
}

ReactDOM.render(
         <App />,
         document.querySelector('#root')
         )