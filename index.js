import { Cliente } from "./Cliente";
import {ContaCorrente} from "./ContaCorrente";

const cliente1 = new Cliente();

cliente1.nome = "André";
cliente1.cpf = 13598173092;
cliente1.idade = 17;

const cliente2 = new Cliente();

cliente2.nome = "Renato";
cliente2.cpf = 12013759;
cliente2.idade = 38;

const contacorrenteandre = new ContaCorrente();

contacorrenteandre.agencia = 5000;

contacorrenteandre.depositar(100);
contacorrenteandre.depositar(500);
contacorrenteandre.depositar(-730);
const valorsacado = contacorrenteandre.sacar(50)

console.log(valorsacado);
console.log(contacorrenteandre);