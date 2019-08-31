'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Secret Now. Forever Secret","Can you keep a Secret?|Protect What is MOST Important","THERE IS NO MORE PRIVACY:|There is ONLY Secrecy","Wake up. Don't be complicit|in your own exploitation"];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 620);
setTimeout(nextSnck, 10000);
setTimeout(nextSnck, 20000);
setTimeout(nextSnck, 30000);
