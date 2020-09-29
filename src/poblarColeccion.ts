import db from './firebase/config';
import data from './firebase/data-inicial';

// //Cargar la coleccion con 1000 documentos

const usuariosRef =db.collection('usuarios');
data.forEach(documento=>{
    usuariosRef.add(documento).then(docRef=>{
        console.log(docRef.id);
    }).catch(err=>{
        console.error(err);
    });
})