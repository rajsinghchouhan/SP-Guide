/**
 * Utility functions for income calculations, discount logic, and formatting
 */

export function calculateMonthlyIncome(sessionsPerWeek: number, pricePerSession: number): number {
  if (sessionsPerWeek < 0 || pricePerSession < 0) return 0;
  // 4.33 weeks in an average month
  return Math.round(sessionsPerWeek * pricePerSession * 4.33);
}

export function calculateDiscountPercent(regularPrice: number, discountedPrice: number): number {
  if (regularPrice <= 0 || discountedPrice >= regularPrice) return 0;
  return Math.round(((regularPrice - discountedPrice) / regularPrice) * 100);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateTimeRemaining(targetTimestampMs: number, currentTimestampMs: number) {
  const diff = Math.max(0, targetTimestampMs - currentTimestampMs);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds, isExpired: diff <= 0 };
}
