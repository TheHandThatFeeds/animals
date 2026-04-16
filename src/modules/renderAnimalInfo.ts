import { IAnimal } from "./IAnimal";

export default function renderAnimalInfo(animal: IAnimal) {
  const animalInfoContainer = document.getElementById("animal-info") as HTMLDivElement;
  // Clear existing content
  animalInfoContainer.innerHTML = "";

  // Age for each animal.
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(animal.birthYear.toString());

  // If the animal is employed or not
  const isEmployed = animal.employmentEndDate ? "not longer employed" : "currently employed";

  // Skills list
  const skillsList = Array.isArray(animal.skills) ? animal.skills : animal.skills ? [animal.skills] : [];

  // Picture of the animal
  const img = document.createElement("img");
  img.src = `./images/${animal.imageUrl}`;

  // Name of the animals
  const name = document.createElement("p");
  name.classList.add("animal-name");
  name.textContent = `${animal.job} the ${animal.kindOfAnimal}`;

  // The animals job
  const job = document.createElement("p");
  job.classList.add("animal-job");
  job.textContent = `${animal.job} — ${isEmployed}`;

  // Age of the animal
  const ageInfo = document.createElement("p");
  ageInfo.classList.add("animal-age");
  const ageLabel = document.createElement("span");
  ageLabel.classList.add("age-label");
  ageLabel.textContent = "Age: ";
  ageInfo.appendChild(ageLabel);
  ageInfo.append(`${age} years old`);

  // Skills of the animal
  if (skillsList.length > 0) {
    const skillsLabel = document.createElement("p");
    skillsLabel.classList.add("skills-label");
    skillsLabel.textContent = "Skills: ";
    const unsortedList = document.createElement("ul");
    unsortedList.classList.add("animal-skills");

    skillsList.forEach((skill) => {
      const list = document.createElement("li");
      list.textContent = skill;
      unsortedList.appendChild(list);
    });

    animalInfoContainer.appendChild(skillsLabel);
    animalInfoContainer.appendChild(unsortedList);
  }

  animalInfoContainer.appendChild(img);
  animalInfoContainer.appendChild(name);
  animalInfoContainer.appendChild(job);
  animalInfoContainer.appendChild(ageInfo);

  }