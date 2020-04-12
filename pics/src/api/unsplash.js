
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID XcwGcQVX0EXNYE78OCeGSyyOWQLGedDrxijanHN_G5E' 
  }
});