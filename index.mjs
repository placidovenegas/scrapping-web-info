import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });

const page = await browser.newPage();

await page.goto("https://web-para-scrapear");

const product = await page.$$eval(".class-contenedor-info", (results) =>
  results.map((el) => {
    const title = el.querySelector(".class-titulo")?.innerText;
    if (!title) return null;
    const img = el.querySelector("img")?.getAttribute("src");
    const price = el.querySelector(
      ".class-contenedor-precio .class-precio "
    )?.textContent;
    const link = el.querySelector(".class-titulo-producto a")?.getAttribute("href");
    return { title, price, img, link };
  })
);

console.log(product);

await browser.close();
