<br />
<p align="center">
  <a href="https://github.com/ySnoopyDogy/Menhera-Tools">
    <img src="https://i.imgur.com/jjgBki0.png" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center"> Data API </h3>

  <p align="center">
    Esta é uma API que lida com os dados da Menhera. Os dados são apenas auxiliares, eles não implicam diretamente no funcionamento da aplicação principal. Estes são apenas para a melhor experiência do usuário, e auxílio no desenvolvimento.
    <br />
  </p>
</p>

## 🔀 | Rotas

> Esta API tem como base o endpoint `/data`.

| Tipo   | Endpoint                  | Descrição                                                                |
| ------ | ------------------------- | ------------------------------------------------------------------------ |
| GET    | `/api/activity`           | Retorna uma atividade aleatória                                          |
| GET    | `/api/activity/all`       | Retorna um array com todas as atividades                                 |
| POST   | `/api/activity`           | Adiciona uma nova atividade                                              |
| PUT    | `/api/activity`           | Reseta todas as atividades para as padrões                               |
| DELETE | `/api/activity`           | Deleta todas as atividades                                               |
| GET    | `/api/assets/:type`       | Retorna um Url aleatório de um asset                                     |
| GET    | `/api/coinflip`           | Retorna as informações dos coinflips de um usuário                       |
| POST   | `/api/coinflip`           | Atualiza os dados de um jogador de coinflip                              |
| POST   | `/api/commands`           | Posta uma execução de comando                                            |
| GET    | `/api/hunt`               | Retorna os status de caçada do usuário                                   |
| POST   | `/api/hunt`               | Posta uma execução do comando hunt                                       |
| GET    | `/api/usages/inactive`    | Retorna o top usuários que estão inativos por mais de uma semana         |
| GET    | `/api/usages/most`        | Retorna o comando que mais foi usado, e o usuário que mais usou comandos |
| GET    | `/api/usages/top/command` | Retorna o top 10 comandos mais usados                                    |
| GET    | `/api/usages/top/user`    | Retorna o top 10 usuários que mais usaram comandos                       |
| GET    | `/api/usages/user`        | Retorna quantos comandos certo usuário ja usou                           |
| GET    | `/api/usages/user/delete` | Retorna quantos vezes o usuário utilizou o comando delete                |
