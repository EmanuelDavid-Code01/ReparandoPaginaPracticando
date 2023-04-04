import React from 'react'
import Itemlist from './Itemlist'

const ItemListContainer = ({saludo}) => {

const listas = [ "lista a" ,"lista b", "lista c"]

  return (
    <>
    <Itemlist/>
    <div>ItemListContainer</div>
    <h1>{saludo}</h1>

    <ul>
      
        {listas.map((lista,index)=>(
        <li key = {index}>
          {lista}
        </li>
        ))}
      
    </ul>
    </>
  )
}

export default ItemListContainer