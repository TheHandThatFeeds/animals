import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const animalList = document.querySelector("#list-of-animals ul");
    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        listItem.addEventListener("click", () => renderAnimalInfo(animal));
        animalList.appendChild(listItem);
    });
}
