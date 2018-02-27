const config = {
  wsUrl: `ws://${location.host}:8080`,
  stun: {
    "urls": "stun:stun.l.google.com:19302"
  },
  turn: {
    "urls": "",
    "credential": "",
    "user": ""
  },
  useTurn: false,
  reduxLog: true
};

export default config;