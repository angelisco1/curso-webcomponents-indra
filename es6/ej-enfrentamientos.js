const equipos1 = [
  'Valencia',
  'Real Madrid',
  'Barcelona',
  'Sevilla',
  'At Bilbao'
]

const equipos2 = [
  'Valencia',
  'Real Madrid',
  'Barcelona',
  'Sevilla'
]

// Valencia - Sevilla
// Barcelona - Real Madrid
// At Bilbao pasa directamente

function shuffle(equipos) {
  const randomTeams = [];
  for (let i = equipos.length-1; i >= 0; i--) {
    const pos = Math.floor(Math.random() * equipos.length);
    let [team] = equipos.splice(pos, 1);
    randomTeams.push(team);
  }
  return randomTeams;
}

function getTeams(equipos) {
  if (equipos.length > 1) {
    const [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} vs ${equipo2}`);
    getTeams(restoEquipos);
  } else {
    if (equipos.length == 1) {
      console.log(equipos[0] + ' pasa directamente');
    }
    console.log('No quedan más equipos');
  }
}

getTeams(shuffle(equipos1));

getTeams(shuffle(equipos2));