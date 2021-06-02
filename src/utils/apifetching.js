export const getGitHubUsers = () => {
    return fetch('https://api.github.com/users/example')
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => Promise.reject(error));
  };
  