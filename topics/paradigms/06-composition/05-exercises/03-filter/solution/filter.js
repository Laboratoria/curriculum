export default messages =>
  messages
    .filter(item => item.message.length < 50)
    .map(item => item.message);
