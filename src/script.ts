import fetchAnimals from "./modules/fetchAnimals.ts";
import renderListOfAnimals from "./modules/renderListOfAnimals.ts";
import renderAnimalInfo from "./modules/renderAnimalInfo.ts";

async function init(){
  const animals = await fetchAnimals();
  if (animals && animals.length > 0) {
    renderListOfAnimals(animals);
    renderAnimalInfo(animals[0]!); // För att börja på det första djuret som är Benny
  }
}

init();
