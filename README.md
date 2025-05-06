# Carbon Footprint

Uma plataforma interativa para calcular, visualizar e reduzir a sua pegada de carbono com base em seus hábitos diários. O sistema oferece sugestões personalizadas e integração com API de precificação de crédito de carbono.

---

## 💡 Objetivo

O **Carbon Footprint** tem como objetivo conscientizar os usuários sobre o impacto ambiental de suas ações cotidianas, permitindo:

* O cálculo da pegada de carbono (CO₂) com base em hábitos de transporte, consumo de energia, alimentação, entre outros.
* A visualização de resultados por categoria em um dashboard interativo.
* A oferta de sugestões práticas para reduzir ou compensar suas emissões.

---

## 🧩 Funcionalidades

### 1. Cadastro e Autenticação

* Registro e login de usuários com autenticação JWT.
* Gerenciamento de perfil pessoal.

### 2. Formulário de Hábitos

* Transporte: tipo de veículo, distância média, frequência.
* Energia: consumo mensal em kWh.
* Alimentação: frequência de consumo de carne, laticínios e industrializados.
* Consumo geral: roupas, eletrônicos, viagens.

### 3. Cálculo da Pegada de Carbono

* Baseado em fatores de emissão reconhecidos (ex: 0.21 kg CO₂/km para carro a gasolina).
* Exibição do resultado em kg ou toneladas de CO₂ por mês/ano.
* Aplicação do Strategy Pattern para isolar as lógicas de cálculo por categoria.

### 4. Dashboard Interativo

* Visualização gráfica das emissões totais e por categoria.
* Histórico de emissões.
* Dicas personalizadas para redução da pegada.

### 5. Sugestões de Compensação

* Recomendações práticas como:

  * 🌳 “Plante 5 árvores”
  * 🚲 “Adote transporte público”
  * 💳 “Compre 1 crédito de carbono”

### 6. Integração com API SOAP

* Integração (mockada com SoapUI) com API de precificação de crédito de carbono.
* Consulta ao valor da tonelada de CO₂ em reais ou dólares.

---

## 🏗️ Arquitetura Backend

Implementação com **NestJS** seguindo o padrão **Clean Architecture**:

```
/src
  /domain
    /entities
    /value-objects
    /repositories
    /services
  /application
    /use-cases
  /infra
    /repositories
    /soap
  /presentation
    /controllers
    /dtos
    /guards
```

* Uso de princípios **SOLID**.
* Injeção de dependência via interfaces.
* Lógicas de domínio puras, sem dependência de frameworks.
* DTOs e validações definidos na camada de apresentação.

---

## 🌐 Frontend (Angular)

Interface desenvolvida em **Angular**, com foco em experiência do usuário e reatividade:

### Telas disponíveis:

* Login / Cadastro
* Formulário de entrada de hábitos
* Página de resultado e resumo da pegada
* Dashboard com gráficos e histórico
* Dicas e sugestões de compensação

#### Tecnologias:

* **ng2-charts** ou **ngx-echarts** para visualizações.
* **RxJS** para comunicação reativa com o backend.
* **Angular Services** para integração com APIs.

---

## 🧪 Extras Técnicos

* ✅ **Testes unitários**:

  * Backend: **Jest**
  * Frontend: **Jasmine / Karma**
* 📘 **Swagger** para documentação automática da API
* 🐳 **Docker** para ambientes de desenvolvimento e produção

---

## 📦 Como Executar o Projeto

### Pré-requisitos

* Node.js e npm
* Docker e Docker Compose (opcional)
* Angular CLI
* NestJS CLI

### Clonando o projeto

```bash
git clone https://github.com/rogeriobgregorio/carbon-footprint-backend.git
cd carbon-footprint-backend
```

### Rodando com Docker

```bash
docker-compose up --build
```

### Ou executando localmente

#### Backend

```bash
npm install
npm run start:dev
```

#### Frontend

```bash
npm install
ng serve
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

