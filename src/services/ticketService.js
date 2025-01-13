// File: src/services/ticketService.js

import { postData, getData } from "./apiService";

// Function to get all raised tickets
export const getTickets = async () => {
  try {
    const tickets = await getData("tickets"); // Example: replace with your API endpoint
    return tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

// Function to create a new ticket
export const createTicket = async (ticketData) => {
  try {
    const ticket = await postData("tickets", ticketData); // Example: replace with your API endpoint
    return ticket;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error;
  }
};
