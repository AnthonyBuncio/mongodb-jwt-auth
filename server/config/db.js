import config from 'config';

const db = config.get('mongoURI');

export default db;
