let produtos = ["Arroz","Feijão","macarrão","leite","café","açúcar"];
console.log("=== LISTA ORIGINAL!! ===")
console.log(produtos);

let temCafe =  produtos.includes("Café");
console.log("café está na lista? " + temCafe);

let poscaoCafe = produtos.indexOf("Café");
console.log("posição do café na lista: " + poscaoCafe);

let copiaParcial = produtos.slice(2, 5);
console.log("Cópia parcial (índices 2 a 4):", copiaParcial);

produtos.splice(3, 1);
console.log("lista depois da remoção do leite:", produtos);

let listaOrganizadaemTexto = produtos.join(" - ");
console.log("Lista organizada em texto:", listaOrganizadaemTexto);
