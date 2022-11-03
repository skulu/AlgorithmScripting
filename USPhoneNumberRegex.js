function telephoneCheck(str) {

  let regexp = /^(1\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
  let result = regexp.test(str);
  
  return result;
}
