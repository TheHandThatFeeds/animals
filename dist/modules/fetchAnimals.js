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
