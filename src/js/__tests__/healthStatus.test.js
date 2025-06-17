import { getHealthStatus } from '../healthStatus.js';

test('"healthy" if health > 50', () => {
  const character = { name: 'Маг', health: 55 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('"wounded" if health is between 15 and 50', () => {
  const character1 = { name: 'Маг', health: 50 };
  const character2 = { name: 'Маг', health: 15 };
  expect(getHealthStatus(character1)).toBe('wounded');
  expect(getHealthStatus(character2)).toBe('wounded');
});

test('"critical" if health < 15', () => {
  const character = { name: 'Маг', health: 14 };
  expect(getHealthStatus(character)).toBe('critical');
});
