import { createContext, useState } from "react";

const ContextApp = createContext();

const ContextAppProvider = ({children})=>{
    
    const [ data, setData] = useState({});
    const [ url, setUrl ] = useState('');


    const getApi = async ()=>{
        const res = await fetch('http://localhost:8080/api/usuarios');
        const data = await res.json(); 
        setData(data);
        setUrl('http://localhost:8080/api/usuarios');
    };

    const putApi = async ()=>{
        // fetch una ruta dinamica 
        const res = await fetch('http://localhost:8080/api/usuarios/10',{
            method: 'PUT',
            body: JSON.stringify({
                nombre: 'deyner',
                email: 'deyneravicii@gmail.com'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        const data = await res.json();
        setData( data );
        setUrl('http://localhost:8080/api/usuarios/10');
    };

    const postApi = async ()=>{
        // fetch enviando queryparams
        const res = await fetch('http://localhost:8080/api/usuarios?nombre=deyner&apikey=12345678&page=1',{
            method: 'POST',
            body: JSON.stringify({
                nombre: 'deyner',
                email: 'deyneravicii@gmail.com'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        const data = await res.json();
        setData( data );
        setUrl('http://localhost:8080/api/usuarios?nombre=deyner&apikey=12345678');
    };

    const deleteApi = async()=>{
        const res = await fetch('http://localhost:8080/api/usuarios?id=1123',{
            method: 'DELETE'
        });
        const data = await res.json();
        setData( data );
        setUrl('http://localhost:8080/api/usuarios?id=1123');
    };

    
    return <ContextApp.Provider 
        value={{
            getApi,
            putApi,
            postApi,
            deleteApi,
            data,
            url,
        }}
    >
        {children}
    </ContextApp.Provider>
}

export {
    ContextAppProvider
}
export default  ContextApp;