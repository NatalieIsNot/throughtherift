if (!String.prototype.toTitleCase) {
  Object.defineProperty(String.prototype, 'toTitleCase', {
    configurable: true,
    writable: true,
    value: function toTitleCase() {
      return this.replace(/(^|\W)\w/g, m => m.toUpperCase());
    }
  });
}