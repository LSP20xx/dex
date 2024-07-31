import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'], // Define qué archivos serán analizados por ESLint
    languageOptions: {
      sourceType: 'commonjs', // Especifica el tipo de módulos, en este caso CommonJS
      globals: globals.browser, // Define los globals específicos del entorno del navegador
    },
    ...pluginJs.configs.recommended, // Incluye la configuración recomendada de @eslint/js
  },
];
