import nconf from 'nconf';

export default nconf
    .argv()
    .env({
        lowerCase: true,
        separator: '_'
    })
    .file('defaults', './config.json')
    .defaults({
        port: '3000',
        host: '0.0.0.0'
    });
