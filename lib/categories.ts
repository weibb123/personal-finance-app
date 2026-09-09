// Hardcoded for Stage 1. Real, user-defined categories arrive in Stage 4.
export const CATEGORIES = [
  "Housing",
  "Groceries",
  "Dining",
  "Transport",
  "Utilities",
  "Health",
  "Entertainment",
  "Shopping",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];
