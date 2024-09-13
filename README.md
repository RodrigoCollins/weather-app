# Weather App

## Descripción

Weather App es una aplicación de pronóstico del tiempo desarrollada en ReactJS. Permite a los usuarios buscar información meteorológica para ciudades alrededor del mundo, guardar ciudades favoritas y consultar pronósticos extendidos.

## Funcionalidades

### Página de Inicio

- **Campo de Búsqueda**: Permite a los usuarios buscar el clima actual de cualquier ciudad.
- **Resultados**: Muestra información del clima actual, incluyendo temperatura, descripción del clima (nublado, soleado, lluvioso, etc.), humedad, velocidad del viento y un ícono representativo.
- **Favoritos**: Opción para guardar ciudades como favoritas, con persistencia entre sesiones.

### Página de Ciudades Favoritas

- **Lista de Favoritos**: Muestra todas las ciudades marcadas como favoritas con información básica del clima.
- **Acceso Rápido**: Enlace a la página de detalles del clima para cada ciudad favorita.

### Página de Detalles del Clima

- **Información Detallada**: Muestra el clima detallado para la ciudad seleccionada, incluyendo un pronóstico extendido para los próximos 5 días.

## Tecnologías Utilizadas

- **Vite**: Utilizado como herramienta de construcción y desarrollo. A diferencia de Create React App (CRA), Vite ofrece una experiencia de desarrollo mucho más rápida gracias a su arquitectura basada en módulos ES. Esto resulta en tiempos de arranque más cortos y actualizaciones instantáneas en el navegador, lo que mejora la productividad durante el desarrollo.
- **React Router DOM**: Utilizado para el enrutamiento de la aplicación.
- **Material-UI**: Empleado para diseñar los componentes de la interfaz.
- **React Context**: Implementado para manejar el estado global de la aplicación
- **WeatherAPI**: Utilizada para obtener datos meteorológicos. Puedes registrarte en [WeatherAPI](https://www.weatherapi.com/) para una suscripción gratuita de hasta 1 millón de requests mensuales. Después de registrarte, obtendrás una API key que debe ser configurada en el archivo `.env`.

## Instalación y Configuración

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/RodrigoCollins/weather-app.git
   cd weather-app

   ```

2. **Instalar Dependencias**
   ```bash
   npm install
   ```
3. **Configurar la Clave API**

   ```
   -Regístrate en WeatherAPI y obtén una API key.
   -Crea un archivo .env en la raíz del proyecto.
   -Añade tu clave API de WeatherAPI en el archivo .env

   VITE_WEATHER_API_KEY=tu_clave_api
   ```

4. **Ejecutar la Aplicación**

   ```bash
   npm run dev
   ```

   Esto lanzará la aplicación en modo de desarrollo 🚀. Si todo está correcto, estará disponible en tu navegador en la siguiente dirección:

   🌐 http://localhost:5173

## Roadmap de Próximas Funcionalidades

Estas son algunas de las funcionalidades que planeamos implementar en futuras versiones del proyecto:

- **Pantallas de Registro**: Añadir funcionalidad para que los usuarios puedan crear una cuenta en la aplicación.
- **Recuperar Contraseña**: Implementar una opción para que los usuarios puedan recuperar su contraseña en caso de olvido.
- **Resetear Contraseña**: Ofrecer una funcionalidad para que los usuarios puedan cambiar su contraseña de forma segura.
- **Atomización de Componentes**: Implementar el atomizado de componentes con `styled-emotion` para un desarrollo más modular y reutilizable.
- **Expansión de Pantallas y Secciones**: Ampliar el número de pantallas y secciones para ofrecer una experiencia más completa a los usuarios, como agregar gráficos históricos del clima y notificaciones personalizadas.
- **Integración con APIs Adicionales**: Explorar la integración con otras APIs para ofrecer datos complementarios como alertas meteorológicas.
- **Mejoras en la Experiencia del Usuario**: Implementar mejoras en la interfaz y la experiencia del usuario basadas en feedback, como temas oscuros o personalizados.
- **Soporte para Idiomas Adicionales**: Ampliar el soporte para diferentes idiomas para llegar a una audiencia global.

## Contribuciones

Si tienes sugerencias adicionales o ideas para nuevas funcionalidades, no dudes en abrir un issue en [GitHub](https://github.com/RodrigoCollins/weather-app) para compartirlas con nosotros.

## Cómo Contribuir

¡Nos encantaría recibir tus contribuciones! Sigue estos pasos para comenzar:

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad o corrección (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y asegúrate de que el código sigue el estilo del proyecto.
4. Realiza pruebas locales y asegúrate de que todo funciona correctamente.
5. Abre un pull request y describe los cambios que has realizado.

Asegúrate de seguir los lineamientos del proyecto, y no dudes en consultar la sección de **issues** para ver cómo puedes ayudar.

## Demo

Puedes ver una demostración en vivo de la aplicación desplegada haciendo clic en el siguiente enlace:

🌐 [Ver Demo en Vivo](https://66e3a21ede091577c9a8e97e--celebrated-cat-ed1a58.netlify.app/)

¡Explora la Weather App y consulta el clima de tus ciudades favoritas! ☀️🌧️❄️
