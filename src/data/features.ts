export type FeatureIcon =
  | "verification"
  | "files"
  | "media"
  | "groups"
  | "printing"
  | "support"
  | "notifications"
  | "dashboard"
  | "audit"
  | "roles";

export const problemItems = [
  "Scattered academic files",
  "Unorganized subject groups",
  "Manual printing requests",
  "Unclear announcements",
  "Disconnected support",
  "No centralized student verification",
] as const;

export const featureItems: Array<{
  title: string;
  description: string;
  icon: FeatureIcon;
}> = [
  {
    title: "Student Verification",
    description:
      "Verify student identity and connect each student to the right university, faculty, specialization, and academic year.",
    icon: "verification",
  },
  {
    title: "Academic Files",
    description:
      "Organize academic files by subjects, groups, faculties, and student access rules.",
    icon: "files",
  },
  {
    title: "Protected Media Access",
    description:
      "Control access to sensitive academic files and student-related media through secure permission-based flows.",
    icon: "media",
  },
  {
    title: "Subject Groups",
    description:
      "Create organized academic communities for subjects, faculties, and student groups.",
    icon: "groups",
  },
  {
    title: "Printing Orders",
    description:
      "Allow students to request printing services and track order progress from the mobile app.",
    icon: "printing",
  },
  {
    title: "Support Tickets",
    description:
      "Help students report issues and receive structured responses from the support team.",
    icon: "support",
  },
  {
    title: "Smart Notifications",
    description:
      "Notify students about verification updates, printing status, support replies, announcements, and group activity.",
    icon: "notifications",
  },
  {
    title: "Admin Dashboard",
    description:
      "Give operational teams the tools to manage verification, files, printing queues, support tickets, and audit logs.",
    icon: "dashboard",
  },
  {
    title: "Audit Logs",
    description:
      "Track sensitive administrative actions and improve operational accountability.",
    icon: "audit",
  },
  {
    title: "Role-Based Access",
    description:
      "Separate permissions for administrators, support teams, and printing staff.",
    icon: "roles",
  },
] as const;
