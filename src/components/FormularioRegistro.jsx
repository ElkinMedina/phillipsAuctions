// import React, {useState} from 'react';

// export default function Formulario(){
//     const [form, setForm] = useState("");
//     const handleChange=(e)=>{
//         setForm({
//             ...form,
//             [e.target.name]:e.target.value
//         })
//     }
    
//     return(
//         <>
//             <h2>Registro de Usuarios:</h2>
//             <form onsubmit={handleChange}>
//                 <label htmlFor="Nombre">Nombre Completo</label>
//                 <input 
//                     type="text"
//                     id="nombre"
//                     name="nombre"
//                     value={nombre}
//                     onChange={(e)=>setNombre(e.target.value)}
//                 />




//             </form>
//         </>

//     )
// }