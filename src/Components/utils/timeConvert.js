export function timeConvert(n) {
  var num = String(n);
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours<10?'0':''}`+ rhours + " : " + `${rminutes<10?'0':''}`+ rminutes + " : 00 ";
}
