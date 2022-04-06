class Registry {
  constructor() {
    this.data = {};
  }

  put(key, value) {
    if (!value) {
      delete this.data[key];
      return;
    }
    this.data[key] = value;
  }

  get(key, initialValue = null) {
    const val = this.data[key];
    if (val) {
      return val;
    }

    if (typeof initialValue == "function") {
      initialValue = initialValue();
    }

    if (initialValue) {
      this.put(key, initialValue);
      return this.data[key];
    }
  }

  delete(key) {
    delete this.data[key];
  }
}

const registry = new Registry();

module.exports = registry;
