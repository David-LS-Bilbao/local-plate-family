# Informe técnico de GertuMenu

## Contexto

GertuMenu es un MVP web creado durante el Prompt-a-thon AI organizado por The Bridge en colaboración con Fundación BBK. El proyecto propone una solución doméstica para ayudar a familias a planificar menús más sostenibles, saludables y conectados con producto local de Bizkaia.

La aplicación actual funciona como prototipo demostrativo y permite validar la idea principal antes de evolucionar hacia una versión de producción con backend, base de datos, APIs e integración real con modelos de IA.

## Problema

Muchas familias quieren comer mejor, comprar producto local y reducir desperdicio alimentario, pero encuentran varias barreras:

- falta de tiempo para planificar menús;
- dificultad para adaptar comidas a alergias, intolerancias o dietas;
- poca conexión entre la compra local y la planificación diaria;
- desconocimiento de productos de temporada;
- falta de motivación familiar para mantener hábitos sostenibles.

## Solución

GertuMenu plantea una experiencia sencilla para organizar la alimentación familiar desde criterios de sostenibilidad, salud cotidiana y proximidad.

La solución permite crear un grupo familiar, configurar preferencias alimentarias, generar propuestas de menú y reforzar hábitos sostenibles mediante un sistema de puntos. También incluye una representación conceptual de trazabilidad para mostrar origen, productor e impacto estimado de algunos platos.

## Funcionalidades

Las funcionalidades principales del MVP son:

- landing informativa del proyecto;
- creación de grupo familiar;
- registro de edad, perfil de ración, dietas, alergias, intolerancias y condiciones médicas;
- configuración de menú sostenible;
- generación local de propuestas de menú;
- enlace conceptual con BBK Azoka;
- sistema de puntos GertuMenu;
- widget visual de trazabilidad educativa.

## Arquitectura

La arquitectura actual es frontend-only.

Tecnologías principales:

- Vite;
- React;
- TypeScript;
- Tailwind CSS;
- shadcn/ui;
- Radix UI;
- React Router;
- TanStack React Query;
- Vitest.

La aplicación se organiza en páginas, componentes reutilizables y librerías locales para almacenamiento y generación de menús.

No existe todavía backend, API propia, base de datos, autenticación ni servicios de IA conectados en tiempo real.

## Almacenamiento local

Los datos del MVP se guardan en el navegador mediante `localStorage`.

Actualmente se almacenan localmente:

- miembros de la familia;
- opción de menú seleccionada;
- puntos y acciones sostenibles registradas.

Este enfoque es adecuado para prototipo, pero no para producción. Una versión productiva debería incorporar backend, base de datos persistente, autenticación, control de acceso, exportación/borrado de datos y medidas de privacidad.

## Despliegue GitHub Pages

El proyecto está orientado a despliegue estático en GitHub Pages.

El comando recomendado para generar la build pública es:

```bash
npm run build:pages
```

La build se prepara en `docs/` y se genera un `404.html` para soportar rutas de React Router en GitHub Pages.

URL pública:

https://david-ls-bilbao.github.io/Gertu-menu/

## Limitaciones

Limitaciones actuales del MVP:

- no hay backend ni API propia;
- no hay base de datos en servidor;
- no hay autenticación de usuarios;
- los datos viven en `localStorage`;
- la generación de menús usa reglas locales y un catálogo limitado;
- no hay integración real con modelos de IA;
- la trazabilidad blockchain/EuskoTrace es una simulación conceptual;
- la conexión con BBK Azoka es un enlace externo, no una integración de cesta o compra;
- la aplicación no ofrece recomendaciones médicas reales.

La información sobre alergias, intolerancias, dietas o condiciones médicas debe tratarse como dato sensible. En una futura versión de producción será necesario diseñar privacidad, consentimiento, seguridad y validaciones con mayor rigor.

## Roadmap

Pasos recomendados para evolucionar el proyecto:

1. Estabilizar el MVP con build, lint y tests funcionando en CI.
2. Corregir cualquier inconsistencia de despliegue.
3. Separar el catálogo de platos e ingredientes del código frontend.
4. Diseñar backend y base de datos.
5. Añadir autenticación y modelo de hogares/familias.
6. Crear un motor de reglas para alergias, intolerancias, dietas y restricciones críticas.
7. Incorporar modelos de IA con validación posterior y respuestas estructuradas.
8. Añadir lista de compra, despensa y reducción de desperdicio.
9. Integrar fuentes reales para producto local, temporada, precio, disponibilidad e impacto.
10. Convertir la trazabilidad conceptual en un sistema de fuentes verificables o estimaciones transparentes.

## Conclusión

GertuMenu cuenta con una base sólida como prototipo: comunica bien el problema, presenta una experiencia funcional y conecta alimentación familiar, sostenibilidad doméstica y producto local.

El siguiente salto técnico consiste en pasar de una demo frontend a una plataforma con datos persistentes, reglas de seguridad alimentaria, API, base de datos, trazabilidad verificable e IA controlada. La oportunidad principal está en convertir la planificación de menús en una herramienta práctica para mejorar la eficiencia ecológica del hogar: comprar mejor, cocinar mejor, desperdiciar menos y aprender en familia.
