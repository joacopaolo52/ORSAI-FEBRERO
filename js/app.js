const posiciones = document.querySelector(`.posiciones`);
const tablaPosiciones = document.querySelector(`#tabla-posiciones`);

const fixture = document.querySelector(`.fixture`);
const tablaFixture = document.querySelector(`#tabla-fixture`);

const goleadores = document.querySelector(`.goleadores`);
const tablaGoleadores = document.querySelector(`#tabla-goleadores`);

const vallas = document.querySelector(`.vallas`);
const tablaVallas = document.querySelector(`#tabla-vallas`);

const fairplay = document.querySelector(`.fairplay`);
const tablaFairplay = document.querySelector(`#tabla-fairplay`);

const sancionados = document.querySelector(`.sancionados`);
const tablaSancionados = document.querySelector(`#tabla-sancionados`);




posiciones.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones active');
    tablaPosiciones.setAttribute(`style`, `display: table ;`);

    fixture.setAttribute('class', 'item-torneo fixture');
    tablaFixture.setAttribute(`style`, `display: none;`);

    goleadores.setAttribute('class', 'item-torneo goleadores');
    tablaGoleadores.setAttribute(`style`, `display: none;`);

    vallas.setAttribute('class', 'item-torneo vallas');
    tablaVallas.setAttribute(`style`, `display: none;`);

    fairplay.setAttribute('class', 'item-torneo fairplay');
    tablaFairplay.setAttribute(`style`, `display: none;`);

    sancionados.setAttribute('class', 'item-torneo sancionados');
    tablaSancionados.setAttribute(`style`, `display: none;`);


});


fixture.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones');
    tablaPosiciones.setAttribute(`style`, `display: none;`);

    fixture.setAttribute('class', 'item-torneo fixture active');
    tablaFixture.setAttribute(`style`, `display: block;`);

    goleadores.setAttribute('class', 'item-torneo goleadores');
    tablaGoleadores.setAttribute(`style`, `display: none;`);

    vallas.setAttribute('class', 'item-torneo vallas');
    tablaVallas.setAttribute(`style`, `display: none;`);

    fairplay.setAttribute('class', 'item-torneo fairplay');
    tablaFairplay.setAttribute(`style`, `display: none;`);

    sancionados.setAttribute('class', 'item-torneo sancionados');
    tablaSancionados.setAttribute(`style`, `display: none;`);

});

goleadores.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones');
    tablaPosiciones.setAttribute(`style`, `display: none;`);

    fixture.setAttribute('class', 'item-torneo fixture');
    tablaFixture.setAttribute(`style`, `display: none;`);

    goleadores.setAttribute('class', 'item-torneo goleadores active');
    tablaGoleadores.setAttribute(`style`, `display: table;`);

    vallas.setAttribute('class', 'item-torneo vallas');
    tablaVallas.setAttribute(`style`, `display: none;`);

    fairplay.setAttribute('class', 'item-torneo fairplay');
    tablaFairplay.setAttribute(`style`, `display: none;`);

    sancionados.setAttribute('class', 'item-torneo sancionados');
    tablaSancionados.setAttribute(`style`, `display: none;`);

});

vallas.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones');
    tablaPosiciones.setAttribute(`style`, `display: none;`);

    fixture.setAttribute('class', 'item-torneo fixture');
    tablaFixture.setAttribute(`style`, `display: none;`);

    goleadores.setAttribute('class', 'item-torneo goleadores');
    tablaGoleadores.setAttribute(`style`, `display: none;`);

    vallas.setAttribute('class', 'item-torneo vallas active');
    tablaVallas.setAttribute(`style`, `display: table;`);

    fairplay.setAttribute('class', 'item-torneo fairplay');
    tablaFairplay.setAttribute(`style`, `display: none;`);

    sancionados.setAttribute('class', 'item-torneo sancionados');
    tablaSancionados.setAttribute(`style`, `display: none;`);

});

fairplay.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones');
    tablaPosiciones.setAttribute(`style`, `display: none;`);

    fixture.setAttribute('class', 'item-torneo fixture');
    tablaFixture.setAttribute(`style`, `display: none;`);

    goleadores.setAttribute('class', 'item-torneo goleadores');
    tablaGoleadores.setAttribute(`style`, `display: none;`);

    vallas.setAttribute('class', 'item-torneo vallas');
    tablaVallas.setAttribute(`style`, `display: none;`);

    fairplay.setAttribute('class', 'item-torneo fairplay active');
    tablaFairplay.setAttribute(`style`, `display: table;`);

    sancionados.setAttribute('class', 'item-torneo sancionados');
    tablaSancionados.setAttribute(`style`, `display: none;`);

});

sancionados.addEventListener('click', () => {
    posiciones.setAttribute('class', 'item-torneo posiciones');
    tablaPosiciones.setAttribute(`style`, `display: none;`);

    fixture.setAttribute('class', 'item-torneo fixture');
    tablaFixture.setAttribute(`style`, `display: none;`);

    goleadores.setAttribute('class', 'item-torneo goleadores');
    tablaGoleadores.setAttribute(`style`, `display: none;`);

    vallas.setAttribute('class', 'item-torneo vallas');
    tablaVallas.setAttribute(`style`, `display: none;`);


    fairplay.setAttribute('class', 'item-torneo fairplay');
    tablaFairplay.setAttribute(`style`, `display: none;`);

    sancionados.setAttribute('class', 'item-torneo sancionados active');
    tablaSancionados.setAttribute(`style`, `display: table;`);

});