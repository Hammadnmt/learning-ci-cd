import test from 'node:test';
import assert from 'node:assert';
import { add } from './math.js';

test('adds 2 + 3 to equal 5', () => {
  assert.strictEqual(add(2, 3), 5);
});
test('Adds two Negative Numbers', () => {
  assert.strictEqual(add(-1, -1), -2)
})