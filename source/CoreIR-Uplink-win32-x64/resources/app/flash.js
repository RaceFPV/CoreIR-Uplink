var Avrgirl = require('avrgirl-arduino');
var sp = require('serialport');

var avrgirl = new Avrgirl({
  board: 'micro'
});

function flash() {

  sp.list(function(err, ports) {
    console.log(ports);
  });
};

Avrgirl.list(function(err, ports) {
  console.log(ports);
  /*
  [ { comName: '/dev/cu.usbmodem1421',
       manufacturer: 'Arduino (www.arduino.cc)',
      serialNumber: '55432333038351F03170',
      pnpId: '',
      locationId: '0x14200000',
      vendorId: '0x2341',
      productId: '0x0043',
      _standardPid: '0x0043' } ]
  */
});