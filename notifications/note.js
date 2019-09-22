'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Secret Now. Forever Secret","Can you keep a Secret?","THERE IS NO MORE PRIVACY:|There is ONLY Secrecy","Wake up. Don't be complicit|in your own exploitation"];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 10000);
setTimeout(nextSnck, 60000);
setTimeout(nextSnck, 140000);
setTimeout(nextSnck, 24000);
