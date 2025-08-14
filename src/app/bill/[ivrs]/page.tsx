import { catchError } from "@/utils";
import BillCard from "./BillCard";

export default async function ElectricityBill({
  params,
}: {
  params: Promise<{ ivrs: string }>;
}) {
  const { ivrs } = await params;

  if (!ivrs) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-red-500">Invalid IVRS number</h1>
      </div>
    );
  }

  const [error, data] = await catchError(
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bill?ivrs=${ivrs}`)
  );
  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-red-500">Error fetching bill details</h1>
      </div>
    );
  }
  const response = await data.json();
  return <BillCard billDetails={response?.data || {}} />;
}
