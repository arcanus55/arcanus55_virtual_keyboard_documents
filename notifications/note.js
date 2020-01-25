'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Identity Theft is an Existential Crisis.|Secure and Endure.", "Secure Now. Forever Secure","Can you keep a Secret?","Listen, times are a-changin|Your entire existence is now digital","Take 55 seconds to think|about your privacy","Trust me, identity theft|is a very dark rabbit hole"];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 17600);
setTimeout(nextSnck, 148000);
setTimeout(nextSnck, 84000);
setTimeout(nextSnck, 480000);
setTimeout(nextSnck, 76000);
setTimeout(nextSnck, 108000);
