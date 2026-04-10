//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const animalInfoContainer = document.getElementById("animal-info");
    // Age for each animal.
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(animal.birthYear.toString());
    // If the animal is employed or not
    const isEmployed = animal.employmentEndDate ? "not longer employed" : "currently employed";
    // Skills list
    const skillsArray = Array.isArray(animal.skills) ? animal.skills : animal.skills ? [animal.skills] : [];
    const skillsHTML = skillsArray.map(skill => `<li>${skill}</li>`).join("");
    animalInfoContainer.innerHTML = `
    <img src="images/${animal.imageUrl}" alt="${animal.name} the ${animal.kindOfAnimal}"/>
    <p>${animal.name} the ${animal.kindOfAnimal}</p>
    <p>${animal.job} - ${isEmployed}</p>
    <p><span class="age-label">Age:</span> ${age} years old.</p>
    ${skillsArray.length > 0 ? `<p><span class="skills-label">Skills:</span></p>
      <ul>${skillsHTML}</ul>` : ""}
  `;
}
