import Card from "../components/Card";
import CardNavigation from "../components/CardNavigation";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div className="min-h-screen h-screen m-0 bg-stone-100">
      <div className="flex h-1/5 justify-center items-center mx-auto">
        <h1 className="text-5xl">Welcome to Flash Card App</h1>
      </div>
      <div className="flex flex-col h-3/5 justify-center items-center mx-auto">
        <Card />
        <CardNavigation />
      </div>
    </div>
  );
}
