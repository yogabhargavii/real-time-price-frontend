import axios from 'axios';

export const fetchCoins = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/coins'); // Adjust the URL as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    return [];
  }
};

export const fetchCoinsForSymbol = async (symbol: string) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=L24PADO4P5WDRW73`);
    return [response.data['Global Quote']]; // Adjust this as needed to match your data structure
  } catch (error) {
    console.error(`Error fetching data for symbol ${symbol}:`, error);
    return [];
  }
};
