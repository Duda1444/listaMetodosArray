let playlist = [
    "Crawling - Linkin Park",
    "Numb - Linkin Park",
    "In the End - Linkin Park",
    "Breaking the Habit - Linkin Park",
    "Faint - Linkin Park",
    "Somewhere I Belong - Linkin Park",
    "Papercut - Linkin Park",
    "One Step Closer - Linkin Park",
];

console.log("Playlist original:", playlist);
let temMusica = playlist.includes("Crawling - Linkin Park");
console.log(`\n1. 'Crawling - Linkin Park' está na playlist?: ${temMusica}`);


let indiceMusica = playlist.indexOf("Crawling - Linkin Park");
console.log(`2. Posição de 'Crawling - Linkin Park': ${indiceMusica}`);

let miniPlaylist = playlist.slice(1, 4);
console.log("3. Mini seleção favoritada:", miniPlaylist);

playlist.splice(3, 1);
console.log("4. Playlist após remover 'Breaking the Habit - Linkin Park':", playlist);


playlist.sort();
console.log("5. Playlist ordenada de A-Z:", playlist);


playlist.reverse();
console.log("6. Playlist invertida de Z-A:", playlist);

let playlistFormatada = playlist.join("\n📻 "); 
console.log("Playlist final!!");
console.log( + playlistFormatada);
