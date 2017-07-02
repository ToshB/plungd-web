const apiBaseUrl = 'https://plungd-api.herokuapp.com';

const submitResults = (results) => {
  // TODO
};

const getPlayers = () => {
  return new Promise((resolve, reject) => {
    fetch(`${apiBaseUrl}/players`).then(response => {
      if (response.ok) {
        response.json().then(result => resolve(result.players));
      } else {
        reject(new Error('Failed to load players'));
      }
    });
  })
}

export { submitResults, getPlayers };