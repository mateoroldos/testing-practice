const caesarCipher = (str, shift) => {
  if (shift === 0) return str;

  return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
};

module.exports = caesarCipher;