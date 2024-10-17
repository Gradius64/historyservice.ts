

import * as path from 'path';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  constructor(name: string, id: string)
  {
    this.name= name;

    this.id = id;
  }

  
  
  }

// Example usage






// TODO: Complete the HistoryService class


  providedIn: 'root'

export class HistoryService {

  private history: any[] = [];

  constructor() { }

  add(entry: any) {
    this.history.push(entry);
  }

  getHistory(): any[] {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}



// Add a city to the history




  // TODO: Define a read method that reads from the searchHistory.json file
  import fs from 'fs';
import { stringify } from 'querystring';
import { getJSDocSatisfiesTag } from 'typescript';

interface SearchItem {
  query: string;
  timestamp: Date;
}

 {
  try {
    const data = await fs.promises.readFile('searchHistory.json', 'utf-8');
    
  } catch (err) {
    console.error('Error reading search history:', err);
    
  }
}
  // Function to read the search history from the file
const readSearchHistory = (): void => {
  // Read the existing search history
  
      
          console.error('Error reading the search history file:');
          return;
      }

      // Parse the existing data
      
          
      
          console.log('Search History:');
      

  //const searchHistory.json = (): Promise<any[]> => {
    ///return new Promise((resolve, reject) => {
      
            
                // Parse the JSON data

                // Step 1: Define the City interface
            
                interface City {
                  name: string;
                  type: number;
                }

                interface Developer extends City {
                      domain: string;
                      type: number
                }
                 
                  





    
            
               
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  function write(cities: City[]): void {
    const jsonData = JSON.stringify(cities);
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  import { City } from './City'; // Assuming you have a City interface defined

async function getCities(): Promise<City[]> {
  const response = await fetch('searchHistory.json');
  const data = await response.json();

  return data.cities as City[]; 
}

 







  

  

    
 
  // Parse the JSON data
  
  // Map the cities array to City objects
  
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file

  
    

    
  




             
  
  // Function to add a city to the search history

  // Read the existing search history

      // Create a unique ID for the new city (you can use a package like uuid for this)
   

      // Add the new city to the search history
      

      // Write the updated search history back to the file
      
          

  

  // Function to add a city to the search history

  // Read the existing search history
 

      // Parse the existing data
     

      // Create a unique ID for the new city (you can use a package like uuid for this)
      

      // Add the new city to the search history
      

      // Write the updated search history back to the file
      
 
  // Create a new city object
  
  


  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
    

  // Define the add city method
  {

  }

  }
