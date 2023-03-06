export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(100, 'Errors 100');
    this.errors.set(200, 'Errors 200');
    this.errors.set(300, 'Errors 300');
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
