console.log("FERRAMENTAS ESTÃO OK");

const tmi = require('tmi.js');


const opts = {
    options: {
        debug: false
    },
    connection: {
        reconnect: true,
        secure: true
    },
  identity: {
    username: 'teamjokerz' ,
    password: 'oauth:stixhpnimzh8brfu8jitish4xcrm6j'
  },
  channels: [ 'liminhag0d', 'brnwowzk1', 'gaules', 'saullo', 'murilo_rt', 'cachorro1337c', 'bt0tv', 'tiburciand0', 'sksfps1', 'mch_agg', 'deercheerup', 'jument1nho', 'danoc0', 'loud_coringa', 'CSRfps'
  ]
};

// Cria um cliente tmi com  nossas opções
const client = new tmi.client(opts);

// Connecta na Twitch:
client.connect()
.then((data) => {
    console.log('connectado', data);
}).catch((err) => {
    console.log('Erro connect', err);
});
