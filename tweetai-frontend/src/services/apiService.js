import axios from 'axios';
import _ from 'lodash';

// API Base URL
const apiClient = axios.create({
  baseURL: 'http://localhost:3006/api',
  timeout: 10000,
});

// Throttle API Requests to respect rate limits
const throttledGetAutobots = _.throttle(async function() {
  return apiClient.get('/autobots');
}, 12000); // 12 seconds between requests to stay under 5 requests/minute

// Retry logic for handling 429 Too Many Requests
async function fetchWithRetry(url, retries = 5, delay = 1000) {
  try {
    const response = await apiClient.get(url);
    if (response.status === 429 && retries > 0) {
      const retryAfter = response.headers['retry-after'] || delay;
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
      return fetchWithRetry(url, retries - 1, delay * 2);
    }
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export default {
  getAutobots() {
    return throttledGetAutobots();
  },
  fetchAutobotsWithRetry() {
    return fetchWithRetry('/autobots');
  },
};
