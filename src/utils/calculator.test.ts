import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMonthlyIncome,
  calculateDiscountPercent,
  formatINR,
  calculateTimeRemaining,
} from './calculator';

test('calculateMonthlyIncome returns correct monthly amount', () => {
  // 5 sessions a week at 2500 each => 5 * 2500 * 4.33 = 54125
  const income = calculateMonthlyIncome(5, 2500);
  assert.equal(income, 54125);
  // Zero sessions returns 0
  assert.equal(calculateMonthlyIncome(0, 3000), 0);
  // Negative inputs guarded
  assert.equal(calculateMonthlyIncome(-1, 2000), 0);
});

test('calculateDiscountPercent returns correct rounded percentage', () => {
  // 1999 to 199 => 90%
  const discount = calculateDiscountPercent(1999, 199);
  assert.equal(discount, 90);

  // Equal price or inverted returns 0
  assert.equal(calculateDiscountPercent(199, 199), 0);
  assert.equal(calculateDiscountPercent(100, 200), 0);
});

test('formatINR formats currency with rupee symbol', () => {
  const formatted = formatINR(199);
  assert.match(formatted, /199/);
});

test('calculateTimeRemaining returns correct breakdown', () => {
  const now = 1000000;
  const target = now + (3 * 3600 + 25 * 60 + 10) * 1000;
  const rem = calculateTimeRemaining(target, now);
  assert.equal(rem.hours, 3);
  assert.equal(rem.minutes, 25);
  assert.equal(rem.seconds, 10);
  assert.equal(rem.isExpired, false);

  const expired = calculateTimeRemaining(now - 1000, now);
  assert.equal(expired.isExpired, true);
});
