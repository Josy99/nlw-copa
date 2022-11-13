function creatGames(player1, hour, player2) {
  return `
      <li>
        <img src="./assets/bandeiras/icon=${player1}.svg" alt="${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/bandeiras/icon=${player2}.svg" alt="${player2}" />
      </li>
  `
}
let delay = -0.4
function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}
document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    creatGames("Algeria", "16:00", "austria") +
      creatGames("brazil", "18:00", "mali")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGames("angola", "20:00", "brazil") +
      creatGames("egypt", "16:00", "cuba")
  ) +
  creatCard(
    "04/12",
    "sexta",
    creatGames("argentina", "12:00", "portugal") +
      creatGames("france", "18:00", "gambia")
  ) +
  creatCard("12/12", "segunda", creatGames("brazil", "12:00", "france"))
