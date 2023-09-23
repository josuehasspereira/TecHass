
<h1 align="center"> TecHass Store </h1

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)



# Loja de Peças de Computador Gamer

Bem-vindo à TecHass Store, o seu destino para comprar as melhores peças usadas de hardware para jogos!

## Descrição do Projeto

Esse projeto consiste em um site de e-commerce onde os usuários podem comprar uma ampla variedade de produtos de hardware de alta qualidade voltados para gamers, sendo elas usadas e semi-novas para permitir um preço mais acessível. Nossa plataforma permite que os usuários naveguem por uma seleção exclusiva de produtos, façam pedidos e adicionem itens ao carrinho de compras. Os produtos são cuidadosamente selecionados e postados exclusivamente pela loja.

## Tabela de Conteúdo

- [Instalação](#instalação)
- [Uso](#Documento)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Instalação

Para usar a nossa plataforma, não é necessário instalação local. Basta acessar o site que estará totalmente disponível na conclusão desse projeto. Nosso protótipo pode ser visto em [www.techass.com.br] em seu navegador

# Documento de Casos de Uso - TecHass Store

## Introdução

Este documento descreve os principais casos de uso da TecHass Store, um projeto de e-commerce voltado para a venda de hardware de jogos.

### Ator Primário

- **Usuário Registrado:** Um usuário que se registrou na plataforma para acessar funcionalidades avançadas, como fazer pedidos, adicionar produtos ao carrinho, salvar informações pessoais e histórico de compras.

### Ator Secundário

- **Administrador da Loja:** O administrador da loja é responsável por postar produtos na plataforma, gerenciar pedidos e monitorar a atividade dos usuários.

## Casos de Uso

### Realizar Compra de um Produto 

**Descrição:** O usuário registrado deseja comprar produtos da loja.

**Pré-condições:** O usuário deve estar autenticado (logado) na plataforma.

**Fluxo Básico:**

1. O usuário acessa o site e faz o login ou cadastro.
2. O usuário navega pelos produtos da loja.
3. O usuário seleciona um ou mais produtos.
4. O usuário adiciona os produtos ao carrinho de compras.
5. O usuário vai para o checkout.
6. O usuário insere as informações de envio e pagamento do produto.
7. O usuário confirma a compra.

**Fluxo Alternativo:**

- Se o usuário desejar adicionar mais produtos após o passo 4, ele pode retornar à página de navegação e repetir o processo.

**Pós-condições:** Os produtos são comprados, o pedido é registrado, o estoque é atualizado e o produto enviado ao comprador.

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


## Considerações Finais

Este documento de casos de uso fornece uma visão geral das principais funcionalidades do sistema. À medida que o projeto progride, esse documento será atualizado com o passar da criaçao de casos de usos mais detalhados e a elaboração de diagramas de sequência para representar a interação entre os atores e o sistema de forma mais precisa.


# Funcionalidades

- Navegação intuitiva e amigável.
- Cadastro de usuário para salvar informações pessoais e histórico de pedidos.
- Adição de produtos ao carrinho de compras.
- Checkout seguro com opções de pagamento.
- Catálogo atualizado regularmente com as últimas novidades em hardware para jogos.

## Contribuição

Se você deseja contribuir para o desenvolvimento deste projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Clone o repositório forkado para a sua máquina local.
3. Crie uma branch para a sua contribuição: `git checkout -b minha-contribuição`
4. Faça as alterações desejadas e commit.
5. Envie as alterações para o seu fork: `git push origin minha-contribuição`
6. Abra um pull request para que possamos revisar suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Contato

Se você tiver alguma dúvida, sugestão ou quiser entrar em contato conosco, sinta-se à vontade para nos enviar um e-mail em [contato@lojadepecasgamer.com](mailto:contato@lojadepecasgamer.com).

Agradecemos por escolher a Loja de Peças de Computador Gamer para suas necessidades de hardware para jogos!
