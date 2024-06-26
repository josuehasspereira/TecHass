<h1 align="center"> TecHass Store </h1

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)



# Loja de Peças de Computador Gamer

Bem-vindo à TecHass Store, o seu destino para comprar as melhores peças usadas de hardware para jogos! Ela existe desde Janeiro de 2023, porém agora pretende iniciar um projeto próprio oficial

## Descrição do Projeto

Esse projeto consiste em um site de e-commerce onde os usuários podem visualizar uma ampla variedade de produtos de hardware de alta qualidade voltados para gamers, sendo elas usadas e semi-novas para permitir um preço mais acessível. Nossa plataforma permite que os usuários naveguem por uma seleção exclusiva de produtos, façam pedidos e adicionem itens ao carrinho de compras. Os produtos são cuidadosamente selecionados e postados exclusivamente pela loja. Os pedidos que foram adiconados ao carrinho, serão enviados ao WhatsApp comercial da loja para daí ser negociado o método de pagamento diretamente entre o cliente e o vendedor.

## Tabela de Conteúdo

- [Funcionalidades](#funcionalidades)
- [Uso](#documento-de-casos-de-uso---tecHass-store)
- [Requisitos](#requisitos)
- [Regras de Negócio](#regras-de-negócio)
- [Tecnologias](#tecnologias)
- [Contato](#contato)


# Funcionalidades

- Navegação intuitiva e amigável.
- Cadastro de usuário para salvar informações pessoais e histórico de pedidos.
- Adição de produtos ao carrinho de compras.
- Redirecionamento de chat com Vendedor.


# Documento de Casos de Uso - TecHass Store

## Introdução

  Este documento descreve os principais casos de uso da TecHass Store, um projeto de e-commerce voltado para a venda de hardware de jogos.

### Ator Primário

- **Usuário Registrado:** Um usuário que se registrou na plataforma para acessar funcionalidades avançadas, como fazer pedidos, adicionar produtos ao carrinho, salvar informações pessoais e histórico de compras.

### Ator Secundário

- **Administrador da Loja:** O administrador da loja é responsável por postar produtos na plataforma, gerenciar pedidos e monitorar a atividade dos usuários conforme os termos e condições.

## Casos de Uso


### Realizar Compra de um Produto

**Descrição:** O usuário registrado deseja comprar produtos da loja.

**Pré-condições:** O usuário deve estar autenticado (logado) na plataforma.

**Fluxo Básico:**

1. O usuário acessa o site.
2. O usuário navega pelos produtos da loja.
3. O usuário seleciona um ou mais produtos.
4. O usuário adiciona os produtos ao carrinho de compras.
5. O usuário vai para o checkout.
6. O usuário é redirecionado para negociar o método de pagamento através do WhatsApp.

**Fluxo Alternativo:**

- Se o usuário desejar adicionar mais produtos após o passo 4, ele pode retornar à página de navegação e repetir o processo.

**Pós-condições:** Os produtos são comprados, o pedido é registrado, o estoque é atualizado e o vendedor negocia o pagamento com o usuário.


### Postar Produto (Administrador)

**Descrição:** O administrador da loja deseja postar um novo produto na plataforma.

**Pré-condições:** O administrador deve estar autenticado na plataforma como administrador.

**Fluxo Básico:**

1. O administrador acessa a página de gerenciamento de produtos.
2. O administrador seleciona a opção de "Adicionar um Novo Produto".
3. O administrador preenche as informações do produto, como nome, tipo, descrição, preço, quantidade e disponibilidade (sujeito a adição de mais informações durante o desenvolvimento do projeto).
4. O administrador faz upload de imagens do produto (mínimo de 4 imagens).
5. O administrador publica o produto.

**Pós-condições:** O novo produto é adicionado ao catálogo da loja e fica disponível para os usuários.


### Visualizar Histórico de Pedidos

**Descrição:** O usuário registrado deseja visualizar seu histórico de pedidos anteriores.

**Pré-condições:** O usuário deve estar autenticado na plataforma.

**Fluxo Básico:**

1. O usuário acessa a página de histórico de pedidos.
2. O usuário visualiza a lista de pedidos anteriores.

**Fluxo Alternativo:**

- O usuário pode selecionar um pedido específico para obter detalhes adicionais.

**Pós-condições:** O usuário visualiza seu histórico de pedidos.


### Devolver um produto comprado

**Descrição:** O usuário registrado deseja fazer uma devolução do produto (dentro do prazo de 7 dias segundo a política da empresa)

**Pré-condições:** O usuário deve estar autenticado na plataforma.

**Fluxo Básico:**

1. O usuário acessa a página de contatos.
2. O usuário abre um ticket preenchendo conforme o formulário.
3. Um Email é enviado com a análise do ticket aberto em questão

**Pós-condições:** O pedido é atendido e o usuário tem o dinheiro estornado (se estiver no prazo de devolução).


## Considerações Finais

Este documento de casos de uso fornece uma visão geral das principais funcionalidades do sistema. À medida que o projeto progride, esse documento será atualizado com o passar da criaçao de casos de usos mais detalhados e a elaboração de diagramas de sequência para representar a interação entre os atores e o sistema de forma mais precisa.


# Requisitos
## - Funcionais

| Identificação | Nome | Descrição | Dados | Atores |
| --- | --- | --- | --- | --- |
| R.F.01 | Realização de Login | Realiza a autenticação do usuário cadastrado no sistema | Email, Senha | Usuário, Administrador |
| R.F.02 | Realização de Cadastro | Realiza o cadastro do usuário no sistema | Nome, Sobrenome, Email, Senha | Usuário, Administrador |
| R.F.03 | Navegação e Visualizaçao dos Produtos | Permite que o Usuário visualize todos os produtos cadastrados na loja e suas informações | Título, Descrição, Valor, Quantidade, Valor Total, Categoria, Especificações | Usuário, Administrador |
| R.F.04 | Adicionar no Carrinho | Permite que o usuário adicione um produto ao seu carrinho de compras | Titulo, Quantidade, Valor Total | Usuário, Administrador |
| R.F.05 | Remover do Carrinho | Permite que o usuário remova um produto do carrinho de compras | Titulo, Quantidade, Valor Total | Usuário, Administrador |
| R.F.06 | Editar Perfil | Permite que o usuário edite seu perfil e suas informações pessoais | Nome, Sobrenome, Email, CPF, Endereço, Data de Nascimento | Usuário, Administrador |
| R.F.07 | Redirecionamento para Negociação | Ao clicar em comprar, o usuário preenchera um formulário, sendo redirecionado para negociar o método de pagamento através do WhatsApp | Nome, Número de Celular | Usuário , Administrador |
| R.F.08 | Cadastrar produto | Permite que o administrador cadastre um novo produto no sistema | Titulo, Descrição, Quantidade, Valor Unitário, Quantidade, Valor Total, Categoria, Especificações | Administrador |
| R.F.09 | Alterar produto | Permite que o administrador altere informações do produto | Titulo, Descrição, Quantidade, Valor Unitário, Quantidade, Valor Total, Categoria, Especificações | Administrador |
| R.F.10 | Excluir produto | Permite que o Administrador exclua um produto do sistema permanentemente | Titulo, Descrição, Quantidade, Valor Unitário, Quantidade, Valor Total, Categoria, Especificações | Administrador |
| R.F.11 | Excluir perfil | Permite que o usuário exclua seu perfil, consequentemente sua conta sera excluída | Usuário, Senha | Usuário, Administrador |
| R.F.12 | Recuperar Senha | Permite que o usuário possa recuperar sua senha caso tenha esquecido | Email | Usuário, Administrador |
| R.F.13 | Filtrar produtos | Permite ao usuário que filtre os produtos segundo a sua preferência | Preço, Categoria, Título | Uusário, Administrador |
| R.F.14 | Avaliar produtos | Permite ao usuário que avalie o produto e comente após realizar a compra do mesmo | Nota, Comentário | Uusário, Administrador |


## - Não Funcionais
| Identificação | Nome | Descrição | 
| --- | --- | --- |
| R.N.F.01 | Compatibilidade | O sistema deve funcionar nos navegadores modernos (Google Chrome, Opera, Microsoft Edge e Mozilla Firefox | 
| R.N.F.02 | Disponibilidade | O sistema deve ficar disponível intermitentemente (24 horas/dia) |
| R.N.F.03 | Segurança de Dados | O sistema deve garatir a criptografia de dados, como senhas, tal informações não podem ser vistas pela administração |


# Regras de Negócio 

## Política de Devolução:
- Descrição: Estabelecer uma política de devolução que define o período durante o qual os clientes podem solicitar devoluções de produtos, as condições para devolução e os procedimentos para processar as devoluções.
- Ações: O sistema deve permitir que os clientes solicitem devoluções dentro do período estipulado, verificando se a solicitação está dentro do prazo e fornecendo orientações sobre o processo de devolução.

## Validação de Dados do Usuário:
- Descrição: Validar os dados fornecidos pelos usuários durante o cadastro e outras interações com o sistema para garantir sua integridade e precisão.
- Ações: O sistema deve realizar validações nos campos de entrada de dados, como e-mail, senha, endereço, etc., para garantir que sejam inseridos corretamente e atendam aos critérios estabelecidos.

## Avaliação de Produtos:
- Descrição: Permitir que os clientes avaliem e comentem sobre os produtos após a compra, fornecendo feedback útil para outros compradores.
- Ações: O sistema deve permitir que os clientes deixem avaliações e comentários sobre os produtos adquiridos, exibindo essas informações na página do produto para futuros compradores.

## Filtragem de Produtos:
- Descrição: Permitir que os clientes filtrem os produtos com base em critérios como preço, categoria, título, etc., para facilitar a busca por itens específicos.
- Ações: O sistema deve fornecer opções de filtragem na página de navegação de produtos, permitindo que os clientes refinem os resultados de acordo com suas preferências.

# Tecnologias

## Abaixo segue as linguagens e tecnologias que serão utilizadas ou que estão entre as opções para o desenvolvimento desse projeto

### Front-end
- Framework Front-end: React
- Linguagens de Marcação e Estilização: HTML5, CSS3
- Biblioteca de Estilização: Bootstrap

### Back-end
- Framework Back-end: Django
- Linguagem de Programação: Python

### Database
- MYSQL (Não confirmado)

### Hospedagem
- Não Confirmado


# Contato

Se você tiver alguma dúvida, sugestão ou quiser entrar em contato conosco, sinta-se à vontade para nos enviar um e-mail em:
- Pessoal [jozzuhass@gmail.com](mailto:jozzuhass@gmail.com).
- Comercial [techass.store@gmail.com](mailto:techass.store@gmail.com)

Agradecemos por escolher a Loja de Peças de Computador Gamer para suas necessidades de hardware para jogos!
