/**
 * 封装storage
 */
const STORAGE_KEY = 'xiaomi';

export default {
  setItem(key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      val[key] = value;
      this.setItem(moduleName, val);
    } else {
      const val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  getItem(key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, moduleName) {
    const val = this.getStorage();
    if (moduleName) {
      delete val[moduleName][key];
    } else {
      delete val[key];
    }
    this.getItem(val);
  },
};
