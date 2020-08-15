//https://developper.spotify.com/
//documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirect_uri = "http://localhost:3000/";

const clientId = "806f7f4f9de845a382470a4d96033347";
// scopes like spotify feature presented as an Array

// We gonna Allow our app to do those functionnality

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
