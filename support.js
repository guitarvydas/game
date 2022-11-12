var pako = require ('pako');
var atob = require ('atob');

function uncompress (s) {
    var data = atob(s);

    // npm install pako
    
    var inf = pako.inflateRaw (
	Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
    var str = decodeURIComponent (inf);
    return str;
}
