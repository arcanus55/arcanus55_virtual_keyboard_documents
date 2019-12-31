'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Being Hacked is an Existential Crisis", "Secret Now. Forever Secret","Can you keep a Secret?","Secure and Endure","Listen, times are a-changin|Your entire existence is now digital."];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 17600);
setTimeout(nextSnck, 380000);
setTimeout(nextSnck, 148000);
setTimeout(nextSnck, 84000);
setTimeout(nextSnck, 480000);
