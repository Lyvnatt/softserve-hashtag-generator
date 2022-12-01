//The Hashtag Generator

function hashtagGenerator (str) {
  str = str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');

  str = '#' + str;

  return str.length > 140 || str.length == 1 ? false : str;
}

hashtagGenerator(" Hello there thanks for trying my Kata");
hashtagGenerator("    Hello     World   ");
hashtagGenerator("");
