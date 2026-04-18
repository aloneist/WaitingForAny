import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  WAITING_ITEM_CATEGORIES,
  WAITING_ITEM_STATUSES,
  type WaitingItem
} from "@waiting-for-ai/shared";

const sections: Array<{
  title: "Today" | "Soon" | "Inbox" | "Done";
  items: WaitingItem[];
}> = [
  {
    title: "Today",
    items: [
      {
        id: "1",
        title: "Check on sofa delivery",
        category: WAITING_ITEM_CATEGORIES.delivery,
        status: WAITING_ITEM_STATUSES.waiting,
        sourceKind: "manual",
        nextCheckAt: "2026-04-18"
      }
    ]
  },
  {
    title: "Soon",
    items: [
      {
        id: "2",
        title: "Follow up on dentist booking",
        category: WAITING_ITEM_CATEGORIES.booking,
        status: WAITING_ITEM_STATUSES.soon,
        sourceKind: "text",
        nextCheckAt: "2026-04-21"
      }
    ]
  },
  {
    title: "Inbox",
    items: [
      {
        id: "3",
        title: "Review refund email",
        category: WAITING_ITEM_CATEGORIES.refund,
        status: WAITING_ITEM_STATUSES.review,
        sourceKind: "email"
      }
    ]
  },
  {
    title: "Done",
    items: [
      {
        id: "4",
        title: "Warranty claim closed",
        category: WAITING_ITEM_CATEGORIES.repair,
        status: WAITING_ITEM_STATUSES.done,
        sourceKind: "manual"
      }
    ]
  }
];

function ItemCard({ item }: { item: WaitingItem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardMeta}>
        {item.category} • {item.status}
      </Text>
      <Text style={styles.cardMeta}>
        Source: {item.sourceKind}
        {item.nextCheckAt ? ` • Check again ${item.nextCheckAt}` : ""}
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Waiting For AI</Text>
        <Text style={styles.title}>A simple home for externally pending items.</Text>
        <Text style={styles.subtitle}>
          AI extraction, screenshot upload, share flows, and item detail are
          still placeholder-only in this scaffold.
        </Text>
      </View>

      {sections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 18
  },
  hero: {
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#fffaf2",
    borderWidth: 1,
    borderColor: "#e5d9c7"
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#5f7a61",
    marginBottom: 8
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
    color: "#22313f"
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    color: "#425466"
  },
  section: {
    gap: 10
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#22313f"
  },
  card: {
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5d9c7",
    gap: 6
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22313f"
  },
  cardMeta: {
    fontSize: 14,
    color: "#5d6b79"
  }
});
