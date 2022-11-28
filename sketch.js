let color = 20;
let serial;
let latestData = "waiting";
let portName = '/dev/tty.usbmodem14101';


function setup() {
  createCanvas(windowWidth, windowHeight);
  
// serial port code copied from P5serial control & Scott Fitzgerald
  serial = new p5.SerialPort();
  serial.list();
  serial.openPort(portName);  
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);
  
}

function getData(data) {
  fact = data;
  console.log(data);
}
