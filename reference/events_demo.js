const EventEmmiter = require('events');

//  Create class
class MonEmmiter extends EventEmmiter{ }

// Init object
const monEmmiter = new MonEmmiter();

//  Create an event listener
monEmmiter.on('event', ()=>console.log('Event fired'));

//  Init event
monEmmiter.emit('event');
