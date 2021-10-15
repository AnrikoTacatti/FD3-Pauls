
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
  authorize(params) {
    return new Promise((resolve, reject) => {
      gapi.auth.authorize(
        {
          'client_id': "54375134452-je2j8tma03g181ji39hnir35grrqjnpj.apps.googleusercontent.com",
          'scope': SCOPES,
          'immediate': params.immediate,
          'cookie_policy': 'single_host_origin'
        },
        authResult => {
          if (authResult.error) {
            return reject(authResult.error);
          }

          return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve()));
        }
      );
    });
  }
}