import test from 'node:test';
import assert from 'node:assert';
import { add, sub } from './math.js';


test('adds 2 + 3 to equal 5', () => {
  assert.strictEqual(add(2, 3), 5);
});
test('Adds two Negative Numbers', () => {
  assert.strictEqual(add(-1, -1), -2)
})

test("subtracts 5-3 to equal 2", () => {
  assert.strictEqual(sub(5, 3), 2)
})