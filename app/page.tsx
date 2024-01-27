import ShippingContainer from "./components/ShippingContainer";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-10 content-end px-6">
      <ShippingContainer className="col-span-5"/>
      <ShippingContainer className="col-span-5"/>
      <ShippingContainer className="col-span-5"/>
      <ShippingContainer className="col-span-5"/>
    </main>
  );
}
