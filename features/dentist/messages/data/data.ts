import type { MessageThread } from "@/features/dentist/shared/types";

export const messageThreads: MessageThread[] = [
  { id: 1, patient: "James Carter", lastMessage: "Is the numbness supposed to last this long after the root canal?", time: "10 min ago", unread: true },
  { id: 2, patient: "Aisha Patel", lastMessage: "Thank you doctor, see you at the next appointment.", time: "1 hr ago", unread: false },
  { id: 3, patient: "Carlos Rivera", lastMessage: "Can I take ibuprofen with my blood thinner prescription?", time: "3 hrs ago", unread: true },
  { id: 4, patient: "Emily Watson", lastMessage: "Confirming my 2 PM appointment tomorrow.", time: "Yesterday", unread: false },
];