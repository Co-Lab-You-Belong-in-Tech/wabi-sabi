import ls from 'localstorage-slim';

ls.config.encrypt = true;

class StoreData {
  constructor() {
    this.data = 'localStore';
  }

  save = (key, data) => {
    ls.set(key, data, {ttl: 2505600}); // expires after 4 weeks / 28 days
  }

  remove = (key) => {
    ls.remove(key);
  }

  get = (key) => ls.get(key);
}

const storage = new StoreData();
export default storage;
