import db from './firebase/config';

//Objecto a grabar
// const usuario={
//     nombre:'Black Four',
//     activo:true,
//     fechaNaci:0,
//     salario:3700
// }


// //Insertar
// db.collection('usuarios').add(usuario).then(docRef=>{
//     console.log(docRef.id);
// }).catch(err=>{
//     console.error(err);
// });

//Modificar update
// db.collection('usuarios')
// .doc('b4qUytME17mmDZCJeRTT')
// .update({activo:false,
//         casado:false});

//Borrar delete
// db.collection('usuarios')
// .doc('b4qUytME17mmDZCJeRTT')
// .delete()
// .then(docRef=>{

// })
// .catch(err=>{
//     console.error(err);
// });

//findAll cada vez que cambia la base de datos
// db.collection('usuarios').onSnapshot(snap=>{
//     snap.forEach(snapHijo=>{
//         console.log(snapHijo.data());
//     })
// });
//findAll todos los id
// db.collection('usuarios').onSnapshot(snap=>{
//     snap.forEach(snapHijo=>{
//         console.log(snapHijo.id);
//     })
// });

//findAll con id y data
// db.collection('usuarios').onSnapshot(snap=>{
//     const usuarios:any[]=[];
//     snap.forEach(snapHijo=>{
//         usuarios.push({
//             id:snapHijo.id,
//             ...snapHijo.data()
//         });

//     })
//     console.table(usuarios);
// });

// //findAll con id y data pero sin observable
// db.collection('usuarios').get().then(snap=>{
//     const usuarios:any[]=[];
//     snap.forEach(snapHijo=>{
//         usuarios.push({
//             id:snapHijo.id,
//             ...snapHijo.data()
//         });

//     })
//     console.table(usuarios);
// });

export const retornaDocumentos=(snapshot:firebase.firestore.QuerySnapshot)=>{
    const data:any[]=[];
    snapshot.forEach(snapHijo=>{
        data.push({
            id:snapHijo.id,
            ...snapHijo.data()
        });

    })
    console.table(data);
}

//findAll con id y data pero sin observable y entregando funcion
// db.collection('usuarios').get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Querys Select * from usuarios where activo=true
// db.collection('usuarios').where('activo','==',true).get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Querys Select * from usuarios where salario>1800
// db.collection('usuarios').where('salario','>',1800)
//     .get().then(snap=>{
//         retornaDocumentos(snap);
//     });


//Querys Select * from usuarios where salario>1800 and salario<2300
// db.collection('usuarios')
// .where('salario','>',1800)
// .where('salario','<',2300)
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Querys Select * from usuarios where salario>1800 and activo==true
//Query compuesto se debe crear el indixe se puede hacer manula o dando click
//sobre el enlace del error
// db.collection('usuarios')
// .where('salario','>',1800)
// .where('activo','==',true)
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });


//Order by por nombre desendente
// db.collection('usuarios')
// .orderBy('nombre','desc')
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Order by por nombre y salario
//Se debe crear el indixe
// db.collection('usuarios')
// .orderBy('nombre','desc')
// .orderBy('salario')
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Paginacion
//Trae solo uno
// db.collection('usuarios').limit(1)
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Paginacion
//Trae solo cuatro
// db.collection('usuarios').limit(4)
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

//Paginacion usando la variable query
// const query=db.collection('usuarios').orderBy('nombre');
// query.limit(50)
// .get().then(snap=>{
//     retornaDocumentos(snap);
// });

////Paginacion con boton
// const btnNext=document.createElement('button');
// btnNext.innerHTML='Next Page';
// document.body.append(btnNext);

// let lastDocument:any=null;
// btnNext.addEventListener('click',()=>{
//     const query=db.collection('usuarios')
//     .orderBy('nombre')
//     .startAfter(lastDocument);

//     query.limit(2).get().then(snap=>{
//         lastDocument=snap.docs[snap.docs.length-1] || null;
//         retornaDocumentos(snap);
//     });
    
// });

// btnNext.click();


// //Cargar la coleccion con 1000 documentos
// import data from './firebase/data-inicial';
// const usuariosRef =db.collection('usuarios');
// data.forEach(documento=>{
//     usuariosRef.add(documento).then(docRef=>{
//         console.log(docRef.id);
//     }).catch(err=>{
//         console.error(err);
//     });
// })