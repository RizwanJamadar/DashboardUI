import {
  FileText,
  ListOrdered,
  Sparkles,
  Link2,
  ArrowUpRight,
  HandCoins,
  BadgePercent,
  LifeBuoy,
  RefreshCcw,
  MessageCircle,
  User,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Articles",
    icon: FileText,
    link: '/',
    children: [
      { label: "Create Article", link: "/articles/create" },
      { label: "Generated Articles", link: "/articles/generated", active: true },
      { label: "Keyword Projects", link: "/articles/keyword-projects" },
      { label: "AI Keyword to Article", link: "/articles/ai-keyword" },
      { label: "Steal Competitor Keyword", link: "/articles/competitor-keyword" },
      { label: "Import Keyword from GSC", link: "/articles/import-gsc" },
      { label: "Manual Keyword to Article", link: "/articles/manual" },
      { label: "Bulk Keyword to Article", link: "/articles/bulk" },
      { label: "Longtail Keyword to Article", link: "/articles/longtail" },
      { label: "Article Settings", link: "/articles/settings" },
    ],
  },
  { label: "Auto Blog", icon: Sparkles, link: "/auto-blog" },
  { label: "Internal Links", icon: ListOrdered, link: "/internal-links" },
  { label: "Free Backlinks", icon: Link2, link: "/free-backlinks" },
  { label: "Integrations", icon: ArrowUpRight, link: "/integrations" },
  { label: "Subscription", icon: HandCoins, link: "/subscription" },
  { label: "Affiliate Program", icon: BadgePercent, link: "/affiliate" },
  { label: "Help Center", icon: LifeBuoy, link: "/help" },
  { label: "Updates", icon: RefreshCcw, link: "/updates" },
  { label: "Live Chat Support", icon: MessageCircle, link: "/support" },
  { label: "Profile", icon: User, link: "/profile" },
];


export const filters = [
  { label: "Generated Articles", value: "generated" },
  { label: "Published Articles", value: "published" },
  { label: "Scheduled Articles", value: "scheduled" },
  { label: "Archived Articles", value: "archived" },
]

export const columns = [
  {
    accessorKey: "title",
    header: "Article Title",
  },
  {
    accessorKey: "keyword",
    header: "Keyword [Traffic]",
  },
  {
    accessorKey: "words",
    header: "Words",
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
  },
  {
    accessorKey:"action",
    header:"Action",
  },
  {
    accessorKey:"status",
    header:"Status",
  }
];

export const articleData = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
    status: "generated",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
    status: "scheduled",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
    status: "archived",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "generated",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "---",
    status: "archived",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "---",
    status: "scheduled",
  },
  {
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    createdOn: "---",
    status: "generated",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    createdOn: "---",
    status: "archived",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    createdOn: "---",
    status: "scheduled",
  },
]
