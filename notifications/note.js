'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Sale 🔥 Ends|Soon","Free 🚀 Shipping!|Over $60","Designed to Survive|Extreme Conditions", "Ultimate Resilience", "Waterproof 🔑 Hack Proof|Keypad Encrypted USB","Buy now and get a|free 🔑 Antique Key|Bottle Opener", "Identity Theft is an Existential Crisis.|Secure and Endure.", "Secure Now. Forever Secure","Can you keep a Secret?","Listen, times are a-changin|Your entire existence is now digital","Take 55 seconds to think 🎲|about your privacy","Trust me, identity theft|is a very dark rabbit hole","Need help? 🎯|Click Chat"];
  snck.q( aMsg[ nNextSnck++ ]);
}
setTimeout(nextSnck,  11800);
setTimeout(nextSnck,  34800);
setTimeout(nextSnck,  60800);
setTimeout(nextSnck, 167600);
setTimeout(nextSnck, 248000);
setTimeout(nextSnck, 188000);
setTimeout(nextSnck, 480000);
setTimeout(nextSnck, 320000);
setTimeout(nextSnck, 208000);
setTimeout(nextSnck, 210600);
setTimeout(nextSnck, 280600);
setTimeout(nextSnck, 288600);
setTimeout(nextSnck, 290600);
setTimeout(function(){ playAudioFile( 7 ); if( snck ) snck.q( "55 Minutes on this site|Click Chat if you need help 🌴"); }, (3300 * 1000));
