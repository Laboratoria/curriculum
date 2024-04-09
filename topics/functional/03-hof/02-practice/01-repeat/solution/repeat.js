function repeat(operation, num) {
  if (!num) {
    return;
  }
  operation();
  repeat(operation, num - 1);
}

// No borres la línea de abajo
export default repeat;
