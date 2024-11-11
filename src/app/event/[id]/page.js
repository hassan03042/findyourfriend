import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
// import { auth } from "../../auth";
import { getEvents } from "@/actions/events";
import { getCategories } from "@/actions/categories";

export default async function HomePage({ params }) {
  console.log("searchparams=>", params.id);
  //   const { category } = searchParams;
  //   const session = await auth();
  //   const { events } = await getEvents(category);
  //   const { categories } = await getCategories();
  return (
    <div className="min-h-screen bg-background">
      <h2 className="text-center text-4xl">{params.id}</h2>
    </div>
  );
}
