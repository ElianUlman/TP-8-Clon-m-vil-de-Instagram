const apikey = "live_bs7mcqbT2MHuj1VyIMbB5ScjJdt7axqIzb3uqRn2M1q4tXaUDNzVOyhYIQy7p0q8"

import axios from "axios"

export const getXpics = async (X) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${X}&api_key=${apikey}`
      );

      return response.data
      
    } catch (error) {
      return error
      
    }
  };


  export const getCatById = async (id) =>{
        try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/${id}`,
        {
            headers: {
               'x-api-key' : apikey 
            }
          
        }
      );

      return response.data
      
    } catch (error) {
      return error
      
    }
  }
