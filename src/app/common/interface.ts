export interface Headline{
  cedulapersona : string,
  tipo : string,
  apellidos : string,
  nombres : string,
  telefono : string,
  email : string,
  cuentaciudadano : string,
  codanterior : string,
  disponeagua : string,
  tiposervicioagua : string,
  disponealcantarillado : string,
  usoalcantarillado : string,
  estadoalcantarillado : string,
  direccion : string,
  numtitulo : string,
  año :string,
  mes : string,
  totalemitido : string,
  estado : string
}


export interface Cartera {
  codigo_coactiva: string, 
  concepto: string,
  nombre_cliente: string,
  estado: string, 
  monto: string,  
  fecha_emision: string, 
  fecha_vencimiento: string
  
}