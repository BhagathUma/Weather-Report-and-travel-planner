import {
  Plane,
  CloudSun,
  Trees,
  Trophy,
  Users,
} from "lucide-react";

export const purposes = [
  {
    id: "general_weather",
    title: "General Weather",
    icon: CloudSun,
  },
  {
    id: "travel",
    title: "Travel",
    icon: Plane,
  },
  {
    id: "outdoor_activity",
    title: "Outdoor Activity",
    icon: Trees,
  },
  {
    id: "sports",
    title: "Sports",
    icon: Trophy,
  },
  {
    id: "group_event",
    title: "Group Event",
    icon: Users,
  },
];


export type Purpose =
  | "general_weather"
  | "travel"
  | "outdoor_activity"
  | "sports"
  | "group_event";