// CHECK JS LINK
console.log('JS OK');
console.log('VUE ok',Vue);

//! TESTO ESERCIZIO

/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

//? CREAZIONE APP DI VUE

const app = Vue.createApp({
    data(){
        return{
            message : 'Hello Vue!',
            imgUrl : 'https://picsum.photos/seed/picsum/200/300',
        }
    },
});

app.mount('#root');