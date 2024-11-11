import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import { auth } from "../../auth";
import { getEvents } from "@/actions/events";
import { getCategories } from "@/actions/categories";

export default async function HomePage() {
  const session = await auth();
  const { events } = await getEvents();
  const { categories } = await getCategories();
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Friend</h1>
          <p className="text-xl mb-8">
            Discover events and make new connections
          </p>
          <div className="flex justify-center">
            <Input
              className="w-full max-w-sm mr-2"
              placeholder="Search events..."
              type="search"
            />
            <Button>Search</Button>
          </div>
        </div>
      </header>

      <UpcomingEvents
        events={events}
        session={session}
        categories={categories}
      />
    </div>
  );
}
