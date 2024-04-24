
# README para el Script de Web Scraping con Playwright

## Descripción General

Este script utiliza la biblioteca Playwright para extraer información de productos de un sitio web especificado. Automatiza un navegador Chromium en modo sin cabeza para navegar al sitio web, extraer datos como el título del producto, imagen, precio y enlace, y luego muestra estos datos. El script finalmente cierra la sesión del navegador.

## Prerrequisitos

- Node.js: Asegúrate de que Node.js está instalado en tu sistema.
- Playwright: Este script utiliza la biblioteca Playwright para controlar el navegador. Instálalo usando `npm install playwright y npx playwright install`.

## Instalación

1. Crea un nuevo directorio para tu proyecto.
2. Navega a tu directorio del proyecto en tu terminal.
3. Ejecuta `npm init -y` para crear un archivo `package.json`.
4. Instala Playwright con `npm install playwright`.

## Uso

1. Guarda el script en un archivo, por ejemplo, `scrape.js`.
2. Ejecuta el script con Node.js ejecutando `node scrape.js` en tu terminal.

## Explicación del Script

El script realiza los siguientes pasos:

1. **Inicia un navegador:** El navegador se lanza en modo sin cabeza.
2. **Abre una nueva página:** Se abre una nueva pestaña del navegador.
3. **Navega a la URL objetivo:** El navegador va a la URL especificada en `page.goto()`. Necesitas reemplazar `"https://web-para-scrapear"` con la URL real que deseas raspar.
4. **Extrae datos:** El script selecciona elementos con la clase `.class-contenedor-info` y extrae el título, fuente de imagen, precio y enlace de cada elemento. Las clases específicas usadas (como `.class-titulo`, `.class-precio`) son placeholders y deben ser reemplazadas con las clases reales usadas en tu sitio web objetivo.
5. **Muestra los datos:** Los datos extraídos se muestran en la consola.
6. **Cierra el navegador:** La sesión del navegador se termina para liberar recursos.
