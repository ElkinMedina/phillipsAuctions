// import { useForm} from "../hooks/useForm"

// const initialForm ={};
// const validationForm=(form)=>{
// let errors={};
// if(!form.name.trim()){
//     errors,name="Este campo es requerido"
    
// }
// }

// export const ContactForm =()=>{
// const{
//     form,
//     errors,
//     loading,
//     response,
//     handleChange,
//     handleBlur,
//     handleSubmit,
// } = useForm(initialForm, validationForm)

// return (
//     <div>
//         <h2>Formulario de Contacto</h2>
//         <form>
//             <input
//                 type='text'
//                 name='name'
//                 placeholder='Nombre'
//                 value={form.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 required
//             />
//             <br/>
//             <input
//                 type='email'
//                 name='email'
//                 placeholder='tuemail@correo.com'
//                 value={form.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 required
//             />
//             <br/>
//             <input
//                 type='text'
//                 name='subjet'
//                 placeholder='Asunto a tratar'
//                 value={form.subject}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 required
//             />
//             <textarea
//                 name="comments"
//                 cols="50"
//                 rows="5"
//                 placeholder="Escribe tus comentarios"
//                 value={form.comments}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 required
//             />
//             <br/>
//             <input
//                 type="submit"
//                 value="Enviar"
//             />
            
//         </form>
//     </div>
// )
// }