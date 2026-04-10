//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter

import { IAnimal } from "./IAnimal";
import renderAnimalInfo from "./renderAnimalInfo";

export default function renderListOfAnimals(animals: IAnimal[]): void {
  const animalList = document.getElementById("list-of-animals") as HTMLUListElement;

  animals.forEach((animal) => {
    const listItem = document.createElement("li");
    listItem.textContent = animal.name;
    listItem.addEventListener("click", () => renderAnimalInfo(animal));
    animalList.appendChild(listItem);
  });
}
