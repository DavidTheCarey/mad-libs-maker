import sendRequest from './send-request';
const BASE_URL = '/api/templates';

export function getAll() {
  return sendRequest(BASE_URL);
}
  
export function createTemplate(templateData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', templateData);
}

export function deleteTemplate(templateId) {
  return sendRequest(`${BASE_URL}/${templateId}`, 'DELETE', templateId);
}