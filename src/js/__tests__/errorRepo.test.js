import ErrorRepository from '../errorRepo.js';

test.each([
  [404, 'Not Found'],
  [403, 'Forbidden'],
  [500, 'Unknown error'],
])('test error code', (code, result) => {
  expect(ErrorRepository.translate(code)).toBe(result);
});