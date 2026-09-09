import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SpendingForm } from "@/components/spending-form";
import { SpendingTable } from "@/components/spending-table";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter your spending below. Entries are kept for this session only.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Add spending</CardTitle>
        </CardHeader>
        <CardContent>
          <SpendingForm />
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <SpendingTable />
        </CardContent>
      </Card>
    </main>
  );
}
