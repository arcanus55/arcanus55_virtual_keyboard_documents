'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Secret Now. Forever Secret","Can you keep a Secret?","Secure and Endure","New Lower Prices"];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 18000);
setTimeout(nextSnck, 68000);
setTimeout(nextSnck, 148000);
setTimeout(nextSnck, 84000);
