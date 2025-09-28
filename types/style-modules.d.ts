// Globale typer for CSS/SCSS-moduler
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

// (valgfritt) sideeffekt-importer uten .module
declare module '*.scss';
