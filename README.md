# TicTacToeHE
Questo progetto implementa il gioco del Tic Tac Toe e fa parte delle sfida poste dal corso gratuito e open source chiamato "The Odin Project", consultabile al seguente indirizzo: https://www.theodinproject.com/. In particolare le indicazioni per il presente progetto sono disponibili qui: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe. 

# Tecnologie impiegate
- HTML;
- CSS;
- Javascript (ES6);
- Git.
# Sfide maggiori
- mantenere il codice leggibile;
- tenere separate UI e logica;
# Obiettivi
- studiare soluzioni per separare logici ed interfaccia utente.
# Soluzione
Il progetto è stato portato a termine suddividendolo in due moduli: uno per la logica del gioco (model.js) e uno per la gestione degli eventi e del rendering. Entrambi i moduli sono stati realizzati tramite IIFE per evitare lo scope pollution e per rendere la logica del gioco riutilizzabile e testabile indipendentemente dall'interfaccia utente. I test sono stati eseguiti attraverso l'uso di file di supporto con test case scritti manualmente; una migliora che si può apportare in tal senso è quella di far ricorso a framework di testing quali Jasmine e Jest. Inoltre, se dovessi re-implementare questo progetto, sceglierei un framework leggero quale è Svelte (https://svelte.dev/).
