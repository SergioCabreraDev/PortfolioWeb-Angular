import { Projects } from "../models/projects";


export const projects: Projects[] = [
    {
        id: 1,
        tittle: 'API REST de Control de Clientes',
        category: 'Back End',
        description: 'API REST para el control de clientes, desarrollado utilizando Spring Boot en el backend y JavaScript para el frontend, la API expone endpoints RESTful que permiten realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos de clientes. Tambien implementa un sistema de autenticación basado en tokens JWT y la encriptación de las contraseñas mediante algoritmos de hash como Argon2.',
        imgPortada: "../../assets/img/apirest.png",
        urlProyect: "https://github.com/SergioCabreraDev/GestorClientes_API_REST",
        technologies: [
            {
            name: "Spring Boot",
            urlImg: "../../assets/img/spring-boot-svgrepo-com.png"
        },
        {
            name: "JS",
            urlImg: "../../assets/img/brand-javascript.png"
        },
        {
            name: "SQL",
            urlImg: "../../assets/img/sql.png"
        }
    ]
    },
    {
        id: 2,
        tittle: 'Block House Web Responsive',
        category: 'Back End y Front End',
        description: 'Web basada en las funciones y servicios proporcionados por blockhouse.es, pero con un diseño más moderno y actualizado. La Web tiene un diseño Responsive, sistema de compra con carrito, reservas, cuentas de usuario con sesiones y registros. ',
        imgPortada: "../../assets/img/792shots_so.png",
        urlProyect: "https://github.com/SergioCabreraDev/Block-House-Web-Responsive",
        technologies: [
            {
            name: "HTML",
            urlImg: "../../assets/img/html.png"
        },
        {
            name: "JS",
            urlImg: "../../assets/img/brand-javascript.png"
        },
        {
            name: "SASS",
            urlImg: "../../assets/img/brand-sass.png"
        },
        {
            name: "PHP",
            urlImg: "../../assets/img/brand-php.png"
        },
        {
            name: "SQL",
            urlImg: "../../assets/img/sql.png"
        }
    ]
    },
    {
        id: 3,
        tittle: 'Predicción de ataque al corazón',
        category: 'BI',
        description: 'Notebook con un modelo de predicción, con una precisión del 88%.',
        imgPortada: "../../assets/img/286shots_so.png",
        urlProyect: "https://github.com/SergioCabreraDev/Heart-Attack-Prediction",
        technologies: [
            {
            name: "Python",
            urlImg: "../../assets/img/brand-python.png"
        }
    ]
    },
    {
        id: 4,
        tittle: 'Análisis de sentimientos',
        category: 'BI',
        description: 'Haciendo web scraping en Amazon, he recopilado cientos de comentarios para realizar un análisis de sentimientos con NLTK.',
        imgPortada: "../../assets/img/852shots_so.png",
        urlProyect: "https://github.com/SergioCabreraDev/Opinion-Mining-PS5-AMAZON",
        technologies: [
            {
            name: "Python",
            urlImg: "../../assets/img/brand-python.png"
        }
    ]
    },
    {
        id: 5,
        tittle: 'Web de Formación Interactiva Block House',
        category: 'Front End',
        description: 'Desarrollé una plataforma web responsive dirigida a camareros, cocineros y ayudantes de camarero. Mi objetivo era ofrecer una experiencia dinámica y eficiente para visualizar y practicar el manejo de los números de los productos del restaurante.',
        imgPortada: "../../assets/img/436shots_so.png",
        urlProyect: "https://github.com/SergioCabreraDev/APP_BlockHouse",
        technologies: [
            {
            name: "HTML",
            urlImg: "../../assets/img/html.png"
        },
        {
            name: "JS",
            urlImg: "../../assets/img/brand-javascript.png"
        },
        {
            name: "SASS",
            urlImg: "../../assets/img/brand-sass.png"
        }
    ]
    }

]
