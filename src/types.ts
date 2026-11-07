export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  totalSeconds: number;
}

export interface WishTemplate {
  id: string;
  category: string;
  categoryUrdu?: string;
  title: string;
  message: string;
  messageUrdu?: string;
  highlight: string;
}

export interface PersonalizedWishData {
  recipientName: string;
  senderName?: string;
  wishText: string;
  createdDate: string;
  templateId: string;
}
