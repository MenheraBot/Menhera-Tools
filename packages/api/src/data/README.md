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

| Tipo   | Endpoint                         | Descrição                                                                                       |
| ------ | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| GET    | `/assets/:type`                  | Retorna um Url aleatório de um asset com o tipo passado na URL                                  |
| GET    | `/activity`                      | Retorna um array com as atividades que a Menhera pode usar                                      |
| POST   | `/activity`                      | Adiciona uma nova atividade                                                                     |
| PUT    | `/activity`                      | Reseta todas as atividades para as padrões                                                      |
| DELETE | `/activity`                      | Deleta todas as atividades                                                                      |
| GET    | `/statistics/bicho`              | Retorna as estatisticas de um usuário no Jogo do Bicho                                          |
| GET    | `/statistics/bicho/top`          | Retorna o top usuários do jogo do bicho                                                         |
| POST   | `/statistics/bicho`              | Cria uma aposta do Jogo do Bicho no Banco de Dados                                              |
| PUT    | `/statistics/bicho`              | Atualiza os dados de um jogador no bicho                                                        |
| PATCH  | `/statistics/bicho`              | Modifica o estado de uma aposta, settando-a como Vencedora                                      |
| GET    | `/statistics/blackjack`          | Retorna as informações dos jogos de Blackjack de um usuário                                     |
| GET    | `/statistics/blackjack/top`      | Retorna o top jogadores do blackjack                                                            |
| POST   | `/statistics/blackjack`          | Atualiza os dados de um jogador de Blackjack                                                    |
| GET    | `/statistics/coinflip`           | Retorna as informações dos coinflips de um usuário                                              |
| GET    | `/statistics/coinflip/top`       | Retorna o top jogadores de coinflip                                                             |
| POST   | `/statistics/coinflip`           | Atualiza os dados de um jogador de coinflip                                                     |
| GET    | `/statistics/roulette`           | Retorna as informações de roleta de um usuário                                                  |
| GET    | `/statistics/roulette/top`       | Retorna o top jogadores de roleta                                                               |
| POST   | `/statistics/roulette`           | Atualiza os dados de um jogador de roleta                                                       |
| GET    | `/statistics/hunt`               | Retorna os status de caçada do usuário                                                          |
| GET    | `/statistics/hunt/top`           | Retorna o top caçadores                                                                         |
| POST   | `/statistics/hunt`               | Atualiza os dados de um jogador nas caças                                                       |
| POST   | `/usages/commands`               | Posta uma execução de comando                                                                   |
| GET    | `/usages/inactive`               | Retorna o ID de todos os usuários que estão inativos por mais de uma semana                     |
| GET    | `/usages/top/command`            | Retorna o top 10 comandos mais usados                                                           |
| GET    | `/usages/top/user`               | Retorna o top 10 usuários que mais usaram comandos                                              |
| GET    | `/usages/user`                   | Retorna a quantidade de comandos que um usuário ja usou, junto com o comando mais usado por ele |
| GET    | `/roleplay/battleconf?userId=id` | Retorna as configurações de batalha de um usuário                                               |
| PATCH  | `/roleplay/battleconf?userId=id` | Atualiza as configurações de batalha de um usuário                                              |
