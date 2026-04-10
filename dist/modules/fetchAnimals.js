//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
export default async function fetchAnimals() {
    try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
            throw new Error("Misslyckades att hämta data: " + response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error vid hämtning av data:", error);
        return null;
    }
}
