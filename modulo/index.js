class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    getcpf() {
        return this.#cpf;
    }

    getNomeUpper() {
        return this.nome.toUpperCase();
    }

    getNomeLower() {
        return this.nome.toLowerCase();
    }

    detalhe() {
        let descricao = `Nome: ${this.nome}\n${this.endereco.detalhe()}\n`;
        Array.from(this.telefones).forEach(telefone => {
            descricao += `${telefone.detalhe()}\n`;
        });
        return descricao;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    detalhe() {
        return `DDD: ${this.ddd} Número: ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEstadoUpper() {
        return this.estado.toUpperCase();
    }

    getEstadoLower() {
        return this.estado.toLowerCase();
    }

    getCidadeUpper() {
        return this.cidade.toUpperCase();
    }

    getCidadeLower() {
        return this.cidade.toLowerCase();
    }

    getRuaUpper() {
        return this.rua.toUpperCase();
    }

    getRuaLower() {
        return this.rua.toLowerCase();
    }

    detalhe() {
        return `Estado: ${this.estado} Cidade: ${this.cidade} Rua: ${this.rua} Número: ${this.numero}`;
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    getcnpj() {
        return this.#cnpj;
    }

    getRazaoSocialUpper() {
        return this.razaoSocial.toUpperCase();
    }

    getRazaoSocialLower() {
        return this.razaoSocial.toLowerCase();
    }

    getNomeFantasiaUpper() {
        return this.nomeFantasia.toUpperCase();
    }

    getNomeFantasiaLower() {
        return this.nomeFantasia.toLowerCase();
    }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial.toUpperCase()}\nNome Fantasia: ${this.nomeFantasia.toUpperCase()}\n-----------------------------------\n`;
        Array.from(this.clientes).forEach(cliente => {
            descricao += `${cliente.detalhe()}\n`;
        });
        return descricao;
    }
}

export {Cliente, Telefone, Endereco, Empresa}