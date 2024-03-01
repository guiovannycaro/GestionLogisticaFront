export class Clientes{

  cli_ID:Number;
  cli_CORREO:string;
  cli_CELULAR:string;
  cli_DIRECCION:string;
  cli_CIUDAD_ID:Number;
  cli_NOMBRES:string;
  cli_ESTADO:Number;



  constructor(){
    this.cli_ID = 0;
    this.cli_CORREO ="";
    this.cli_CELULAR = "";
    this.cli_DIRECCION = "";
    this.cli_CIUDAD_ID = 0;
    this.cli_NOMBRES = "";
    this.cli_ESTADO = 0;

  }
}
