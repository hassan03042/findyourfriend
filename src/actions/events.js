"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addEvent = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/events`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Event added successfully");
    revalidatePath("/admin/events");
  }
};

export const getEvents = async (category) => {
  console.log("category in action=>", category);
  let events = await fetch(
    `${process.env.BASE_URL}api/events?category=${category ? category : ""}`
  );
  events = await events.json();
  console.log("Events Fetched successfully");
  return events;
  revalidatePath("/admin/categories");
};

export const getSingleEvent = async (id) => {
  let event = await fetch(`${process.env.BASE_URL}api/events/${id}`);
  if(event.ok){
    event = await event.json();
    console.log("Event Fetched successfully");
    return event;
  }else{
    redirect('/not-found')
  }
  revalidatePath("/admin/categories");
};
