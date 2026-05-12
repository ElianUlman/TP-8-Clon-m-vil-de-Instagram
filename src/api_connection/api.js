const apikey = "live_bs7mcqbT2MHuj1VyIMbB5ScjJdt7axqIzb3uqRn2M1q4tXaUDNzVOyhYIQy7p0q8"

import axios from "axios"

export const get10pics = async () => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=20&api_key=${apikey}`
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
