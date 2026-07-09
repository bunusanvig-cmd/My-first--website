import { Card } from "@/components/ui/card";

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </Card>
  );
}

