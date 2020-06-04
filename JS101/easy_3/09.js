// cleanup non alphanumeric chars
console.log(cleanUp("---what's my +*& line?")); // " what s my line "

function cleanUp(string) {
  return string.replace(/[\W_]+/g, " ");
}
