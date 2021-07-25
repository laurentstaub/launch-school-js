function xor(operand1, operand2) {
  if ((operand1 && !operand2) || (!operand1 && operand2)) {
    return true;
  }
  return false;
}