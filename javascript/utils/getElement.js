function $(element) {
  if (document.querySelector(element)) {
    return document.querySelector(element);
  } else {
    // throw new Error(`${element} doesn't exist!`);
    console.error(`${element} doesn't exist!`);
  }
}
export default $;
