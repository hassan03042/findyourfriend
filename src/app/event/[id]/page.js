import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
// import { auth } from "../../auth";
import { getEvents, getSingleEvent } from "@/actions/events";
import { getCategories } from "@/actions/categories";
import { auth } from "../../../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function EventDetailsPage({ params }) {
  const { event } = await getSingleEvent(params.id);
  if (!event) redirect("not-found");
  const session = await auth();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={event.thumbnail}
              alt={event.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <Badge className="mb-2 w-36">{event.category.title}</Badge>
          <CardTitle className="text-3xl">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <CalendarIcon className="text-muted-foreground" />
            <span>
              {formatDate(event.startDate)} - {formatDate(event.endDate)}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <ClockIcon className="text-muted-foreground" />
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <MapPinIcon className="text-muted-foreground" />
            <span>{event.address}</span>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={event.createdBy.profileImg} />
              <AvatarFallback>
                {event.createdBy.fullname.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{event.createdBy.fullname}</p>
              <p className="text-sm text-muted-foreground">Event Organizer</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <UserIcon className="mr-2 h-4 w-4" /> Going to Event
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
