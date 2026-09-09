"use client";

import { Button } from "@/components/ui/button";
import { useSpendingStore } from "@/store/spending";

const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export function SpendingTable() {
  const entries = useSpendingStore((s) => s.entries);
  const removeEntry = useSpendingStore((s) => s.removeEntry);

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No spending entered yet. Add your first entry above.
      </p>
    );
  }

  const rows = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const total = entries.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            <th className="py-2 pr-4 font-medium">Date</th>
            <th className="py-2 pr-4 font-medium">Category</th>
            <th className="py-2 pr-4 font-medium">Note</th>
            <th className="py-2 pr-4 text-right font-medium">Amount</th>
            <th className="py-2" />
          </tr>
        </thead>
        <tbody>
          {rows.map((e) => (
            <tr key={e.id} className="border-b last:border-0">
              <td className="py-2 pr-4 tabular-nums">{e.date}</td>
              <td className="py-2 pr-4">{e.category}</td>
              <td className="py-2 pr-4 text-muted-foreground">{e.note || "—"}</td>
              <td className="py-2 pr-4 text-right tabular-nums">
                {currency.format(e.amount)}
              </td>
              <td className="py-2 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEntry(e.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-medium">
            <td className="py-2 pr-4" colSpan={3}>
              Total
            </td>
            <td className="py-2 pr-4 text-right tabular-nums">
              {currency.format(total)}
            </td>
            <td className="py-2" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
