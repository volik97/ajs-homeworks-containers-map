import ErrorRepository from '../app';

const err = new ErrorRepository();

test('Проверка содержания ошибки 100', () => {
  expect(err.translate(100)).toBe('Errors 100');
});

test('Проверка содержания ошибки 200', () => {
  expect(err.translate(200)).toBe('Errors 200');
});

test('Проверка содержания ошибки 300', () => {
  expect(err.translate(300)).toBe('Errors 300');
});

test('Проверка содержания ошибки N', () => {
  expect(err.translate(500)).toBe('Unknown error');
});