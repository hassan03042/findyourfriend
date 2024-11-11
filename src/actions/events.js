"use server";

import { revalidatePath } from "next/cache";

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
