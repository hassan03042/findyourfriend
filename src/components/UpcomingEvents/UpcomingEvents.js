"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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

// Placeholder data

export default function UpcomingEvents({ categories = [], events = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event._id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.category.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full mb-4">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <p className="flex items-center mb-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {new Date(event.startDate).toLocaleDateString()}{" "}
                  {event.startTime} - {event.endTime}
                </p>
                <p className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  {event.address}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={event.createdBy.profileImg}
                    alt={event.createdBy.fullname}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm">{event.createdBy.fullname}</span>
                </div>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
