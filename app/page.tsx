import ShippingContainer from "./components/ShippingContainer";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-10 gap-6 content-start p-6">
      <ShippingContainer className="col-span-5 bg-red-500"/>
      <ShippingContainer className="col-span-5 bg-red-500"/>
      <ShippingContainer className="col-span-5 bg-red-500"/>
      <ShippingContainer className="col-span-5 bg-red-500"/>
    </main>
  );
}
