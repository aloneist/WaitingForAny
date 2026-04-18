export const WAITING_ITEM_CATEGORIES = {
  reply: "reply",
  delivery: "delivery",
  refund: "refund",
  booking: "booking",
  repair: "repair",
  subscription: "subscription",
  approval: "approval",
  other: "other"
} as const;

export type WaitingItemCategory =
  (typeof WAITING_ITEM_CATEGORIES)[keyof typeof WAITING_ITEM_CATEGORIES];

export const WAITING_ITEM_STATUSES = {
  waiting: "waiting",
  soon: "soon",
  review: "review",
  done: "done"
} as const;

export type WaitingItemStatus =
  (typeof WAITING_ITEM_STATUSES)[keyof typeof WAITING_ITEM_STATUSES];

export type WaitingItemSourceKind =
  | "manual"
  | "text"
  | "screenshot"
  | "email"
  | "message";

export type WaitingItem = {
  id: string;
  title: string;
  category: WaitingItemCategory;
  status: WaitingItemStatus;
  sourceKind: WaitingItemSourceKind;
  nextCheckAt?: string;
  notes?: string;
};
