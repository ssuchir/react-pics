import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5fd3bc0b804427caaac4b69f200c8df907453877a82180abb9775249dc4ed1fc'
}});
