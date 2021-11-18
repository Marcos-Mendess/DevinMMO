import axios from "axios"

const baseUrl = "https://mmo-games.p.rapidapi.com"
const config = { 
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': 'b825f0fd04msh3da86559b52f59ep1454afjsn3793750c9fab'
},
}

const getApiData = async (endpoint) => { 
    try { 
        const { data } = await axios.get(`${baseUrl}/${endpoint}`,config);
        return data;
    } catch (error) { 
        return error;
    }
}

const getDetailsGame = async (id) => { 
    try { 
        const { data } = await axios.get(`${baseUrl}/game`, { 
            ...config,
            params: {id},
        });
        return data;
    }
        catch (error) { 
            return error;
        }
    };

const getDataFunctions  = { 
    getGames : async () => await getApiData("games"),
    getNews : async () => await getApiData("latestnews"),
    getDetails : getDetailsGame(),
};

export default getDataFunctions;




