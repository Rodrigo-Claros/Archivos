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

        pedidos:
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
        detalles_producto:"",
        tienda:"",
        precio: 0.00,
        modelo:"",
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