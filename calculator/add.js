function add (x, y, more) {
  var extra = 0;
  if (more && Arrary.isArray(more)) {
  	for (var i = 0; i < more.lenght; i++) {
  		extra += more[i];
  	}
  }
  return x + y + extra; //xxx
}