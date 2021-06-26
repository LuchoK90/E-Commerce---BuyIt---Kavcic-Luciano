import React, {useEffect, useState} from 'react'

const promiseItems = () => {
    return new Promise ((resolve) => {

        setTimeout(
            () => resolve([
        {id:1, name:'Monitor', price:200, mostrar:true},
        {id:2, name:'Teclado', price:300, mostrar:true},
        {id:3, name:'Parlantes', price:500, mostrar:true},
        {id:4, name:'Mouse', price:100, mostrar:true},
    
    ]), 2000);

        
    });
};

export const Items = () => {
const [productos, setProductos] = useState([]);

const consultarPromesa = () => {
    promiseItems().then((data) => {
        const produ = data.filter((producto) => producto.mostrar);
    setProductos(produ);
    });
};
    useEffect(() => {
       consultarPromesa();
       
    }, []);

    return (
        <>
        {productos.length === 0 ? (<h1>CARGANDO...</h1>) : (
      <p>
        {productos.map((producto) =>(
            <p key={producto.id}>
               <p style={{fontSize:'38px'}}>PRODUCTO: {producto.name} | PRECIO: $ {producto.price} </p>
            </p>
             
        ))}
        </p> )}
        </>
    );

}
