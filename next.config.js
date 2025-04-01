/** @type {import('next').NextConfig} */
module.exports = {
  output: "export", // Define que o Next.js vai gerar uma versão estática
  trailingSlash: true, // Adiciona a barra no final de URLs, útil para GitHub Pages
  distDir: "out", // Pasta de saída dos arquivos exportados
};

// /** @type {import('next').NextConfig} */
// module.exports = {};
