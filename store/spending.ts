import { create } from "zustand";
import type { Category } from "@/lib/categories";

export type SpendingEntry = {
  id: string;
  amount: number;
  category: Category;
  date: string; // ISO yyyy-mm-dd
  note: string;
};

type SpendingState = {
  entries: SpendingEntry[];
  addEntry: (entry: Omit<SpendingEntry, "id">) => void;
  removeEntry: (id: string) => void;
};

// Session-only. No persist middleware — spending data is never stored (see implementation.md §2).
export const useSpendingStore = create<SpendingState>((set) => ({
  entries: [],
  addEntry: (entry) =>
    set((state) => ({
      entries: [...state.entries, { ...entry, id: crypto.randomUUID() }],
    })),
  removeEntry: (id) =>
    set((state) => ({
      entries: state.entries.filter((e) => e.id !== id),
    })),
}));
