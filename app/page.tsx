import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Your spending overview will show up here.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>No spending entered yet</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add your first entry to see it here.
        </CardContent>
      </Card>
    </main>
  );
}
