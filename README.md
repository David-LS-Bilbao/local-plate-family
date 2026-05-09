# GertuMenu

**GertuMenu** es un prototipo web creado durante el **Prompt-a-thon AI** organizado por **The Bridge** en colaboración con **Fundación BBK**.

El proyecto fue desarrollado como MVP en una jornada de ideación, prototipado y presentación rápida, utilizando herramientas de IA generativa y vibe-coding. La web propone una solución para ayudar a las familias a planificar menús sostenibles, saludables y adaptados a sus necesidades, priorizando productos locales, de temporada y de proximidad.


https://david-ls-bilbao.github.io/Gertu-menu/

---

## Contexto del evento

Este proyecto nace dentro del evento **Prompt-a-thon AI**, celebrado en el marco de Innovation Experiences de The Bridge.

Durante el evento, los equipos trabajaron en retos reales del hogar con el objetivo de imaginar, prototipar y presentar soluciones funcionales apoyadas en IA. La dinámica combinó:

- ideación guiada;
- vibe-coding en vivo;
- creación de una web o app funcional;
- pieza visual;
- pitch final;
- demo del producto ante el resto de participantes.

Enlace del evento:  
https://innovation.thebridge.tech/

Noticia relacionada en El Correo:  
https://www.elcorreo.com/bizkaia/crear-app-horas-filologo-20260423141335-nt.html

---

## Idea del proyecto

**GertuMenu** ayuda a las familias a organizar su alimentación diaria de forma más consciente.

La aplicación permite crear un grupo familiar, registrar necesidades alimentarias y generar propuestas de menú teniendo en cuenta:

- número de personas que comen en casa;
- edades y perfiles de ración;
- alergias;
- intolerancias;
- dietas especiales;
- condiciones médicas;
- preferencias alimentarias;
- producto local de Bizkaia;
- cocina de temporada;
- reducción del desperdicio alimentario.

El objetivo es acercar la alimentación sostenible a la vida cotidiana, haciendo que comer mejor sea más fácil, más local y más familiar.

---

## Problema que resuelve

Muchas familias quieren comer mejor, comprar producto local y reducir desperdicio, pero se encuentran con varias barreras:

- falta de tiempo para planificar menús;
- dificultad para adaptar comidas a alergias o intolerancias;
- poca conexión entre la compra local y la planificación diaria;
- desconocimiento de productos de temporada;
- falta de motivación familiar para adoptar hábitos sostenibles.

**GertuMenu** convierte esa complejidad en una experiencia sencilla, visual y gamificada.

---

## Funcionalidades principales

### 1. Grupo familiar

La aplicación permite añadir miembros de la familia indicando:

- nombre;
- rol familiar;
- edad;
- perfil de ración;
- dieta;
- alergias;
- intolerancias;
- condiciones médicas;
- preferencias o necesidades concretas.

Esta información se utiliza para personalizar la experiencia de menú.

---

### 2. Configuración de menú sostenible

El usuario puede configurar su menú según diferentes opciones:

- menú personalizado diario o semanal;
- menú con lista de compra;
- adaptación de una receta existente a ingredientes locales.

También se pueden ajustar criterios como:

- número de días;
- comidas por día;
- tipo de cocina;
- presupuesto;
- tiempo de cocina;
- variedad;
- exclusión de ingredientes;
- producto de temporada;
- reducción de desperdicio;
- prioridad km 0.

---

### 3. Producto local y BBK Azoka

El prototipo conecta la idea de menú familiar con la compra de producto local, incluyendo una opción orientada a BBK Azoka.

La propuesta busca facilitar que una familia pueda pasar de la planificación del menú a la compra de ingredientes locales de Bizkaia.

---

### 4. Gamificación familiar

La aplicación incluye un sistema de puntos llamado **Puntos GertuMenu**.

Cada gesto sostenible suma puntos, por ejemplo:

- comer producto de temporada;
- probar una verdura nueva;
- terminar el plato sin desperdicio;
- reaprovechar sobras;
- ayudar a cocinar;
- comprar producto km 0;
- compostar;
- elegir agua en lugar de refresco.

El objetivo es convertir los hábitos sostenibles en un juego familiar.

---

### 5. Trazabilidad educativa

El proyecto incorpora una idea de trazabilidad visual para mostrar información sobre el origen de los platos:

- productor;
- caserío o punto de origen;
- distancia aproximada;
- impacto positivo;
- CO₂ ahorrado;
- dato educativo sobre el alimento.

Esta parte funciona como concepto de producto y como posible línea futura de evolución.

---

## Equipo

**Equipo de trabajo**

| Nombre | Área | contact |
|---|---|---|
|Rubens |Team Lead|   https://www.linkedin.com/in/rubensbl/
| Edy | Full Stack |    |
| David | Full Stack | https://www.linkedin.com/in/david-lopez-sotelo-256a70154/?skipRedirect=true
| Marcos | Full Stack | https://www.linkedin.com/in/marcos-mauricio-salinas-delgado-b1b47a212/
| Sheila | Ciberseguridad |
| Andoni | Ciberseguridad |
| Anghelo | Ciberseguridad |
| Mikel | Data Science | https://www.linkedin.com/in/mikelanibarroortega?utm_source=share_via&utm_content=profile&utm_medium=member_ios
| Danillo | Data Science | https://www.linkedin.com/in/danillo-souza-68040a15b/
| Juancar | Data Science | https://www.linkedin.com/in/juancarlospinamartinez 
| Aitziber | Marketing | https://www.linkedin.com/in/aitziberdiezmarketingbilbao/
| Eider | Marketing |https://www.linkedin.com/in/eider-fano-033b47276?utm_source=share_via&utm_content=profile&utm_medium=member_ios

---

## Tecnologías utilizadas

El proyecto está desarrollado con una base moderna de frontend:

- **Lovable** para prototipado asistido por IA;
- **Vite**;
- **React**;
- **TypeScript**;
- **Tailwind CSS**;
- **shadcn/ui**;
- **Radix UI**;
- **React Router**;
- **TanStack React Query**;
- **Lucide React**;
- **Sonner** para notificaciones;
- **Vitest** para testing.

---

## Estructura funcional

La aplicación incluye varias vistas principales:

| Ruta | Función |
|---|---|
| `/` | Landing principal del proyecto |
| `/familia` | Creación del grupo familiar |
| `/menu` | Configuración del menú sostenible |
| `/puntos` | Sistema de puntos e incentivos familiares |

---

## Estructura de documentación

- `docs/`: carpeta de build y publicación estática para GitHub Pages. Se actualiza al generar la versión publicable del sitio.
- `project-docs/`: documentación editable del proyecto, informes técnicos y material de trabajo que no forma parte de la build estática.

---

## Estado actual del proyecto

GertuMenu se encuentra actualmente en fase de **MVP/prototipo funcional**. La aplicación permite probar el flujo principal de la idea: crear un grupo familiar, configurar un menú sostenible, visualizar propuestas de platos y registrar puntos familiares por hábitos sostenibles.

El proyecto está implementado como una aplicación frontend con React y Vite. A día de hoy:

- los datos se guardan en el navegador mediante `localStorage`;
- no hay backend ni API propia todavía;
- no hay base de datos persistente en servidor;
- no hay autenticación de usuarios;
- la generación de menús usa una lógica local basada en reglas y datos embebidos;
- la integración con BBK Azoka es conceptual mediante enlace externo;
- la trazabilidad blockchain/EuskoTrace se presenta como simulación conceptual dentro del prototipo.

El objetivo de esta versión es demostrar la propuesta de valor y servir como base para una evolución posterior hacia una aplicación de producción.

---

## Limitaciones del MVP

Esta versión no debe interpretarse como un producto final ni como una herramienta médica o nutricional certificada.

Limitaciones principales:

- **Persistencia local**: la información de familia, configuración y puntos se guarda en `localStorage`, por lo que queda asociada al navegador y dispositivo del usuario.
- **Sin backend**: todavía no existen servicios de servidor, API propia, base de datos, autenticación ni sincronización entre dispositivos.
- **Menús generados localmente**: las propuestas se generan con una lógica de prototipo y un catálogo limitado de platos, no con un motor nutricional completo.
- **Sin recomendaciones médicas reales**: aunque se recogen alergias, intolerancias, dietas y condiciones médicas, la aplicación no sustituye el criterio de profesionales sanitarios ni ofrece diagnóstico o tratamiento.
- **Trazabilidad conceptual**: los elementos de blockchain, EuskoTrace, CO2 ahorrado y origen verificado funcionan como demostración visual, no como verificación real conectada a fuentes externas.
- **Compra no integrada**: la conexión con BBK Azoka es un enlace externo, no una cesta automática ni una integración transaccional.
- **Sin IA conectada**: el prototipo nace de una idea apoyada por IA generativa, pero la aplicación actual no llama a modelos de IA en tiempo real.

---

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/David-LS-Bilbao/Gertu-menu.git
cd Gertu-menu
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación se servirá localmente con Vite. Revisa la URL que muestre la terminal, normalmente `http://localhost:8080/`.

### 4. Generar build para GitHub Pages

```bash
npm run build:pages
```

Este comando genera la versión estática en `docs/` y prepara `404.html` para que React Router funcione correctamente en GitHub Pages.

### 5. Previsualizar la build

```bash
npm run preview
```

### 6. Ejecutar lint

```bash
npm run lint
```

### 7. Ejecutar tests

```bash
npm run test
```

---

## Despliegue

La versión pública del prototipo está disponible en GitHub Pages:

https://david-ls-bilbao.github.io/Gertu-menu/

El proyecto está preparado para compilarse como sitio estático. Para una futura versión de producción con usuarios, API, base de datos, modelos de IA e integraciones externas, será necesario ampliar la arquitectura actual.
