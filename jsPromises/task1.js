function printDelayed(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printDelayed('Привіт, світ!', 2000);
