// use DBTemu

//COLLECCION DE USUARIOS, 
//LO QUE SAQUE DE LO QUE PUEDE HABER EN EL PERFIL O CUENTA DE USUARIO
db.usuario.insertMany
([
    {
        usuario_id: 1,
        nombreUsuario:"",
        email:"",
        celular:"",
        idioma:
        [
            "",
            "",
            "",
            ""
        ],

        tipo_moneda:
        [
            "",
            "",
            "",
        ],

        direcciones :
            [
                {
                    pais:
                    [
                        "",
                        "",
                        "",
                        "",
                    ],

                    ciudad:"",
                    codigo_postal:"",
                    indicaciones:"",
                    principal: true
                },
                                {
                    pais:"",
                    ciudad:"",
                    indicaciones:"",
                }
            ],

        metodo_pago :
            [
                {
                    tipo_tarjeta:"",
                    numero_tarjeta:"",
                    fecha_vencimiento:"",
                    CVV:"",
                    Correo_Factrua:""

                },
                                {
                    tipo_tarjeta:"",
                    numero_tarjeta:"",
                    fecha_vencimiento:"",
                    CVV:"",
                    Correo_Factrua:""

                }
            ],

        pedidos: //Aquise supone que se tiene que hacer una tipo referencia al objeto u ID de el documento Pedidos
            [
                {
                    estado:"",
                    nombre_producto:"",
                    Id_producto:"",
                    precio:0.00,
                    numero_seguimiento:""

                },
            ],

        tiendas_seguidad:
        [
            "",
            "",
            "",
            "",

        ],

        carrito:
            [ 
                {
                    producto_id : ObjectId(""),
                    cantidad: 2,
                    fecha_agregado: ISODate(""),
                }    
          ]   
        
    },

])






//COLECCION DE PRODUCTOS
db.productos.insertMany
([
    {
        _id:"p001",
        nombre:"",
        descripcion:"",
        detalles_producto:
            {
                color:
                    [
                     "",
                     "",
                     ""   
                    ],
                    bateria:"",
                    conectividad:"",
                    modelo:"",

            },
        tienda:"",
        precio: 0.00,
        precio_original:0.00,
        descuento:40,
        fecha_publicacion: ISODate(""),
        categoria: 
            [
                {
                    nombrecategotia:"",
                    subcategoria:
                        [
                            "",
                            "",
                        ]
                }
            ],
        stock: 50,

        imagenes:
            [
                "",
                "",
            ],
        
        color: 
            [
                "",
                "",
                "",
            ],

        calificacion:
        [
            {
                usuario_id: 0,
                puntuacion : 0,
                comentario : "",
                fecha_calificacion:""
            }
        ],
        valoracion:"",
        tags:
            [
                "",
                "",
                "",

            ]
        
            
    }
])


// COLECCION DE PEDIDOS
db.pedido.insertMany
([
    
    {
        pedido_id:"",
        usuario_id:"",
        metodo_pago:"",
        estado:"",
        fecha_orden:"",
        direccion_destino:
            {
                pais:"",
                ciudad:"",
                codigo_postal:"",
                indicaciones:""

            },
        productos:
            [
                {
                    producto_id:"",
                    nombre:"",
                    precio_unitario:0.00,
                    cantidad:0
                }

            ],
        
            total:0.00

        
    }
])

//COLECCION DE PUBLICIDAD