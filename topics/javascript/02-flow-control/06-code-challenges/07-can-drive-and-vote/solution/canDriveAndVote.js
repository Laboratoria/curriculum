const canDriveAndVote = (edad) => {
  if (edad >= 16 && edad >= 18) {
    return true;
  }

  return false;
};

export default canDriveAndVote;
