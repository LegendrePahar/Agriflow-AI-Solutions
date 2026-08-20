import {
  Camera,
  ScanSearch,
  Crop,
  BrainCircuit,
  BadgeCheck,
  Banknote,
} from "lucide-react";

export const workflowSteps = [
  {
    id: 1,
    icon: Camera,
    title: "Capture Produce",
    description:
      "Take a clear photo using your phone or upload an existing image.",
  },

  {
    id: 2,
    icon: ScanSearch,
    title: "Detect Produce",
    description:
      "Our AI automatically identifies the produce and isolates it from the background.",
  },

  {
    id: 3,
    icon: Crop,
    title: "Segment & Analyze",
    description:
      "Computer vision extracts the produce and prepares it for detailed analysis.",
  },

  {
    id: 4,
    icon: BrainCircuit,
    title: "Extract Features",
    description:
      "The AI evaluates size, colour, freshness, defects, texture and overall quality.",
  },

  {
    id: 5,
    icon: BadgeCheck,
    title: "Assign Grade",
    description:
      "A standardized quality grade is generated using our trained grading model.",
  },

  {
    id: 6,
    icon: Banknote,
    title: "Recommend Price",
    description:
      "A fair farm-gate price is calculated from the standardized quality assessment.",
  },
];