import sendRequest from './send-request';
const BASE_URL = '/api/entries';

export function getAll() {
  return sendRequest(BASE_URL);
}
  
export function createEntry(entryData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', entryData);
}

export function deleteEntry(entryId) {
  return sendRequest(`${BASE_URL}/${entryId}`, 'DELETE');
}