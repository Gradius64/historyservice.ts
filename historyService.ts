import fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
 

  constructor(name: string, id: number) {
        name = name;
        id = id;
    
   
}


}


  





  
  
  


// Example usage




// // TODO: Complete the HistoryService class

export class HistoryService {

  private history: string[] = [];

  constructor() { }

  add(entry: string): void {
    this.history.push(entry);
    
    
  }

  clear() : void {
   var history = [];

  }
}

 



// //class HistoryService {
//   // TODO: Define a read method that reads from the searchHistory.json file
function readSearchHistory() {





interface SearchHistoryEntry {
  query: string;
  timestamp: Date;
}
try {
  const data = fs.readFileSync('searchHistory.json', 'utf-8');
} catch(error){
  console.log(error)
}



//     private filePath: string; // Path to the searchHistory.json file

//     constructor(filePath: string) {
//         this.filePath = filePath;
//     }

//     // public read(): Promise<City[]> {
//     //     return new Promise((resolve, reject) => {
            
               
//   // private async read() {}
//   // TODO: Define a write method that writes the updated cities array to the searchHistory.json file

interface City {
  name: string;
  // Add other properties as needed
}

//const write = (cities: City[]) => {
  //const jsonData = JSON.stringify(cities, null, 2); // 2 spaces for pretty formatting

  //fs.writeFileSync('searchHistory.json', jsonData);

//}
// Assuming you have a cities array:


// Define the write method
async function write(cities: string[]): Promise<void> {
  try {
    const data = JSON.stringify(cities);
    await fs.promises.writeFile('searchHistory.json', data);
  } catch (err) {
    console.error('Error writing to searchHistory.json:', err);
  }
}
//   function writeCitiesToFile(cities: string[]): Promise<void> {
//     return new Promise((resolve, reject) => {
//         // Convert the cities array to a JSON string
//         const data = JSON.stringify(cities, null, 2); // Pretty print with 2 spaces

        
        
      
    
// }
//   // private async write(cities: City[]) {}
//   // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
function getCities(): City[] {
  try {
    const data = fs.readFileSync('searchHistory.json', 'utf-8');
    const cities = JSON.parse(data);

    // Assuming the JSON structure is an array of cities
    return cities as City[];
  } catch (error) {
    console.error('Error reading cities:', error);
    return [];
  }
}
//   // Parse the JSON data
  
//   // Map the cities array to City objects
  
//   // async getCities() {}
//   // TODO Define an addCity method that adds a city to the searchHistory.json file
function addCity(city: string): void {
  const filePath = 'searchHistory.json';
  
//   // Define the add city method

  


//   // async addCity(city: string) {}
//   // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
//   // async removeCity(id: string) {}
}

}
