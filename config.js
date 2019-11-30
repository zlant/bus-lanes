var editorName = 'BusLanes'
var version = '0.2.0'

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
