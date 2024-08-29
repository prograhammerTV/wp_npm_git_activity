import moment from 'moment';

const now = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById('moment').innerText = `Current Date and Time: ${now}`;
