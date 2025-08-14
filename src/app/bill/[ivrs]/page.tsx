export default async function FetchBill({
  params,
}: {
  params: Promise<{ ivrs: string }>
}) {
  const { ivrs } = await params

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bill?ivrs=${ivrs}`);
  const response = await data.json();
  console.log("response from api/bill --------> ", response);

  return (
    <div>
      <h1>{ivrs}</h1>
    </div>
  )
}