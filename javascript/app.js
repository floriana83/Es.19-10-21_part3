let Animale = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");

let Identifica = (Animale == 1) ? "Chose the Dog" 
        : (Animale == 2) ? "Chose the Cat" 
        : (Animale == 3) ? "Chose the Goldfish" 
        : (Animale == 4) ? "Chose the Monkey" 
        : (Animale == 5) ? "Chose the Panda" 
        : "Animale not found"; 
console.log(Identifica)