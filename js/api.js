const INCOMING_SERVER_ADDRESS = 'https://23.javascript.pages.academy/kekstagram/data';
const OUTGOING_SERVER_ADDRESS = 'https://23.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(INCOMING_SERVER_ADDRESS)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    OUTGOING_SERVER_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
