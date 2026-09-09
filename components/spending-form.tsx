"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, type Category } from "@/lib/categories";
import { useSpendingStore } from "@/store/spending";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function SpendingForm() {
  const addEntry = useSpendingStore((s) => s.addEntry);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [date, setDate] = useState(today());
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = Number(amount);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      setError("Enter an amount greater than 0.");
      return;
    }
    if (!category) {
      setError("Pick a category.");
      return;
    }
    if (!date) {
      setError("Pick a date.");
      return;
    }

    addEntry({ amount: parsed, category, date, note: note.trim() });
    setAmount("");
    setCategory(null);
    setDate(today());
    setNote("");
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          inputMode="decimal"
          step="0.01"
          min="0"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="category">Category</Label>
        <Select
          value={category}
          onValueChange={(v) => setCategory(v as Category | null)}
        >
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="note">Note (optional)</Label>
        <Input
          id="note"
          type="text"
          placeholder="e.g. weekly shop"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive sm:col-span-2">{error}</p>
      )}

      <div className="sm:col-span-2">
        <Button type="submit">Add entry</Button>
      </div>
    </form>
  );
}
