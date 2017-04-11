# Instalación

1. Dentro de la carpeta **root** crear el archivo *package.json* y copiar dentro el siguiente codigo.

```{
  "name": "fizzmod-scripts",
  "version": "0.1.0",
  "description": "fizzmod scripts",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/start.js",
    "watch": "webpack --watch --config fizzmod-scripts/webpack.config.dev.js",
    "build": "webpack --progress --colors --config fizzmod-scripts/webpack.config.prod.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JoshuaSebastianKim/fizzmod-scripts.git"
  },
  "author": "Joshua Sebastian Kim",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/JoshuaSebastianKim/fizzmod-scripts/issues"
  },
  "homepage": "https://github.com/JoshuaSebastianKim/fizzmod-scripts#readme",
  "eslintConfig": {
    "extends": "react-app"
  },
  "devDependencies": {
    "autoprefixer": "^6.5.3",
    "babel-core": "^6.18.2",
    "babel-eslint": "^5.0.0-beta6",
    "babel-loader": "^6.2.7",
    "babel-plugin-transform-class-properties": "^6.19.0",
    "babel-plugin-transform-es2015-modules-amd": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-es2016": "^6.16.0",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-0": "^6.16.0",
    "css-loader": "^0.26.0",
    "css-mqpacker": "^5.0.1",
    "eslint": "^3.16.1",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-config-react-app": "^0.5.2",
    "eslint-plugin-flowtype": "^2.30.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^4.0.0",
    "eslint-plugin-react": "^6.10.0",
    "express": "^4.14.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "html-webpack-plugin": "^2.24.1",
    "jshint": "^2.9.4",
    "jshint-loader": "^0.8.3",
    "json-loader": "^0.5.4",
    "node-sass": "^4.1.1",
    "postcss-loader": "^1.2.2",
    "pug": "^2.0.0-beta6",
    "pug-loader": "^2.3.0",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.1",
    "svg-inline-loader": "^0.7.1",
    "webpack": "^1.14.0",
    "webpack-dev-middleware": "^1.9.0",
    "webpack-dev-server": "^1.16.2"
  },
  "dependencies": {
    "axios": "^0.15.3",
    "eslint": "^3.16.1",
    "jsonfile": "^2.4.0",
    "radium": "^0.18.1",
    "react": "^15.4.0",
    "react-addons-css-transition-group": "^15.4.2",
    "react-aim": "^0.1.10",
    "react-collapse": "^2.3.3",
    "react-dom": "^15.4.0",
    "react-facebook": "^2.2.5",
    "react-google-recaptcha": "^0.5.4",
    "react-height": "^2.1.1",
    "react-modal": "^1.6.5",
    "react-motion": "^0.4.6",
    "react-redux": "^5.0.1",
    "react-scroll": "^1.4.5",
    "react-select": "^1.0.0-rc.2",
    "react-slick": "^0.14.2",
    "react-sticky": "^5.0.5",
    "redux": "^3.6.0",
    "redux-form": "^6.4.3",
    "redux-logger": "^2.7.4",
    "redux-thunk": "^2.1.0",
    "reselect": "^2.5.4",
    "sanitizer": "^0.1.3",
    "slug": "^0.9.1",
    "svg-inline-react": "^1.0.3",
    "swiper-r": "^0.1.3",
    "whatwg-fetch": "^2.0.3"
  }
}```

2. Una vez copiado el contenido, en la terminal ejecutar **npm install** para descargar e instalar las dependencias.

## Utilización

El *package.json* viene con 2 scripts para correr con npm.

```npm run watch```

Corre **webpack** en modo watch. Escucha cada cambio en los **.js** configurado en los entrys que es un *object* que es levandato desde el archivo **paths.js**, donde la **key** es el nombre final de los archivos generados (ej.: si nuestra entry se llama "script-principal", nuestros files compilados van a llamarse "script-principal.js" y "script-principal.css") y el value tiene que ser la ruta hacia el JS.

```npn run build```

Igual que el watch, pero genera los archivos dentro de una carpeta ***build*** y aplica optimizaciones al codigo como Uglify.js.
