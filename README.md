# Taller4y5

Informe de Implementación de Librerías en React
1. Introducción

Para el desarrollo de este taller se creó un proyecto utilizando React y Vite. Posteriormente se implementó una estructura de componentes compuesta por Header, Sidebar, Content y Footer, utilizando módulos CSS para mantener los estilos organizados.

Además, se instalaron librerías adicionales para mejorar la apariencia visual, la experiencia de usuario y facilitar el desarrollo de la interfaz.

2. Librería Principal Implementada: Mantine
¿Qué es Mantine?

Mantine es una biblioteca de componentes para React que proporciona más de 120 componentes listos para usar, incluyendo:

Formularios
Botones
Tablas
Modales
Notificaciones
Menús
Componentes de diseño

También incorpora:

Accesibilidad integrada
Soporte para modo oscuro
Hooks personalizados
Excelente documentación
Instalación
npm install @mantine/core @mantine/hooks @mantine/tiptap
Implementación en el Proyecto

Se utilizó el componente MantineProvider para envolver toda la aplicación.

Código utilizado
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className={style.app}>
        <Header />
        <div className={style.layout}>
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </MantineProvider>
  );
}



Beneficios obtenidos
Mejor organización de la interfaz.
Componentes modernos y accesibles.
Facilidad para escalar el proyecto.
Compatibilidad con futuras funcionalidades.
3. Librería Adicional: Framer Motion
¿Qué es?

Framer Motion es una librería especializada en animaciones para React.

Permite:

Animaciones de entrada y salida.
Efectos visuales fluidos.
Transiciones entre componentes.
Instalación
npm install framer-motion
Implementación en el proyecto

Se utilizó para animar el componente Header.

Código utilizado
import { motion } from 'framer-motion';

<motion.header
  className={styles.header}
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Header Content
</motion.header>
Resultado

Cuando la página carga, el encabezado aparece suavemente desde la parte superior con un efecto de desvanecimiento.

4. Librería Adicional: Lucide React
¿Qué es?

Lucide React es una biblioteca de iconos moderna para React.

Características:

Más de 1000 iconos.
Diseño minimalista.
Fácil personalización.
Excelente rendimiento.
Instalación
npm install lucide-react
Implementación en el proyecto

Se utilizó el icono de Copyright en el Footer.

Código utilizado
import { Copyright } from 'lucide-react';

<Copyright size={14} />
Resultado

Se añadió un icono profesional al pie de página junto al texto de derechos reservados.

5. Estructura del Proyecto
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Sidebar.jsx
│   └── Content.jsx
│
├── style/
│   ├── Header.module.css
│   ├── Footer.module.css
│   ├── Sidebar.module.css
│   ├── Content.module.css
│   └── App.module.css
│
├── App.jsx
└── main.jsx
