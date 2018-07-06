var editorName = 'BusLanes'
var version = '0.1'

var valuesLane = ['parallel', 'diagonal', 'perpendicular', 'no_parking', 'no_stopping', 'marked', 'fire_lane'];
var valuesCond = ['free', 'ticket', 'disc', 'residents', 'customers', 'private'];

var legend = [
    { condition: 'disc', color: 'yellowgreen', text: 'Disc' },
    { condition: 'no_parking', color: 'orange', text: 'No parking' },
    { condition: 'no_stopping', color: 'salmon', text: 'No stopping' },
    { condition: 'free', color: 'limegreen', text: 'Free parking' },
    { condition: 'ticket', color: 'dodgerblue', text: 'Paid parking' },
    { condition: 'customers', color: 'greenyellow', text: 'For customers' },
    { condition: 'residents', color: 'hotpink', text: 'For residents' },
    { condition: 'disabled', color: 'turquoise', text: 'Disabled' }
];

var useTestServer = false;

var urlOverpass = 'https://overpass-api.de/api/interpreter?data=';
var urlJosm = 'http://127.0.0.1:8111/import?url=';
var urlID = 'https://www.openstreetmap.org/edit?editor=id';

var urlOsmTest = useTestServer
    ? 'https://master.apis.dev.openstreetmap.org'
    : 'https://www.openstreetmap.org';

var auth = useTestServer
    ? osmAuth({
        url: urlOsmTest,
        oauth_consumer_key: '',
        oauth_secret: '',
        auto: true,
        //singlepage: true
    })
    : osmAuth({
        url: urlOsmTest,
        oauth_consumer_key: 'BUSD1oprdshegDYAS4CSnSxCDEtdtQbsnnRa1o3e',
        oauth_secret: 'i69Zrt7lLkaRVuBzS5fT7VWIZrGobFQUAhFue4gh',
        auto: true,
        //singlepage: true
    });