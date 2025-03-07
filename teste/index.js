import { Telefone, Endereco, Empresa, Cliente } from 'modulo';

// testes:

// cliente 1
const telefone1Cliente1 = new Telefone('12', '999999999');
const telefone2Cliente1 = new Telefone('11', '888888888');
let seTelefones1 = new Set().add(telefone1Cliente1).add(telefone2Cliente1);
const cliente1Endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '123');
let cliente1 = new Cliente('Pedro', '123456789', cliente1Endereco);
cliente1.telefones = seTelefones1;

// cliente 2
const telefone1Cliente2 = new Telefone('11', '123456789');
const telefone2Cliente2 = new Telefone('12', '435326546');
const enderecoCliente2 = new Endereco('MG', 'Uberlândia', 'Av. dos Ubers', '123');
let cliente2 = new Cliente('Felipe', '987654321', enderecoCliente2);
cliente2.telefones.add(telefone1Cliente2).add(telefone2Cliente2);

// cliente 3
const telefone1Cliente3 = new Telefone('21', '777777777');
const telefone2Cliente3 = new Telefone('21', '999999999');
const enderecoCliente3 = new Endereco('RJ', 'Rio de Janeiro', 'Rua Copacabana', '456');
let cliente3 = new Cliente('Carlos', '112233445', enderecoCliente3);
cliente3.telefones.add(telefone1Cliente3).add(telefone2Cliente3);

// cliente 4
const telefone1Cliente4 = new Telefone('31', '222222222');
const telefone2Cliente4 = new Telefone('31', '333333333');
const enderecoCliente4 = new Endereco('MG', 'Belo Horizonte', 'Rua Amazonas', '789');
let cliente4 = new Cliente('Mariana', '556677889', enderecoCliente4);
cliente4.telefones.add(telefone1Cliente4).add(telefone2Cliente4);

// cliente 5
const telefone1Cliente5 = new Telefone('41', '444444444');
const telefone2Cliente5 = new Telefone('41', '555555555');
const enderecoCliente5 = new Endereco('PR', 'Curitiba', 'Rua XV de Novembro', '101');
let cliente5 = new Cliente('Julia', '998877665', enderecoCliente5);
cliente5.telefones.add(telefone1Cliente5).add(telefone2Cliente5);

//empresa
const telefone1Empresa1 = new Telefone('12', '777777777');
const telefone2empresa2 = new Telefone('12', '666666666');
const enderecoEmpresa1 = new Endereco('SP', 'São José dos Campos', 'Av. Cassiano Ricardo', '123');
let empresa1 = new Empresa('ABC LTDA', 'Mercaddo Online', '123456789012', enderecoEmpresa1);
empresa1.clientes.add(cliente1).add(cliente2).add(cliente3).add(cliente4).add(cliente5);
empresa1.telefones.add(telefone1Empresa1).add(telefone2empresa2)

console.log(empresa1.detalhe());