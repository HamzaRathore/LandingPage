import blog1 from "../assets/blog/blog1.svg";
import blog2 from "../assets/blog/blog2.svg";
import blog3 from "../assets/blog/blog3.png";

// Benefits
import apple from "../assets/benefits/apple.svg";
import chrome from "../assets/benefits/chrome.svg";
import firefox from "../assets/benefits/firefox.svg";
import linux from "../assets/benefits/linux.svg";
import microsoft from "../assets/benefits/microsoft.svg";
import safari from "../assets/benefits/safari.svg";

// CreditDetail
import tick from "../assets/tick.svg";

// CustomerRating
import capterra from "../assets/review/capterra.svg";
import trustpilot from "../assets/review/trustpilot.svg";
import g from "../assets/review/g.svg";
import stars from "../assets/review/stars.svg";

// CustomerReview
import review1 from "../assets/cust-review/review1.svg";
import review2 from "../assets/cust-review/review2.svg";
import review3 from "../assets/cust-review/review3.svg";
import review4 from "../assets/cust-review/review4.svg";

// for Analysis
export const steps = [
  {
    id: 1,
    title: "Analyze",
    description:
      "Scan invoices, automate data-entry and route approvals, effortlessly, automatically.",
  },
  {
    id: 2,
    title: "Tracking",
    description:
      "Gather information about your business, it's structure, goal and policies",
  },
  {
    id: 3,
    title: "payments",
    description: "Make global payments and get paid in any currency in 24h.",
  },
  {
    id: 4,
    title: "Cashflow",
    description: "Get real-time insights and forecasts on your finances.",
  },
];

//   Benefits

export const leftlogo = [
  {
    id: 1,
    logo: apple,
    name: "maxOS,",
  },
  {
    id: 2,
    logo: microsoft,
    name: "WINDOWS,",
  },
  {
    id: 3,
    logo: linux,
    name: "LINUX",
  },
];
export const rightlogo = [
  {
    id: 1,
    logo: chrome,
    name: "CHROME,",
  },
  {
    id: 2,
    logo: safari,
    name: "SAFARI,",
  },
  {
    id: 3,
    logo: firefox,
    name: "&FIREFOX",
  },
];

//Blog.jsx
export const blogs = [
  {
    id: 1,
    title: "The worst advice we've ever heard about web design",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog1,
    type: "BUSINESS",
    time: ". 8 MIN READ",
  },
  {
    id: 2,
    title: "The History Of Web Design",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog2,
    type: "MARKETING",
    time: ". 8 MIN READ",
  },
  {
    id: 3,
    title: "10 Things Nobody Told You About Being a Web Designer",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog3,
    type: "PRODUCT",
    time: ". 8 MIN READ",
  },
];

// CreditDetail

export const detail = [
  {
    id: 1,
    src: tick,
    text: "No hidden fees",
  },
  {
    id: 2,
    src: tick,
    text: "100% security. Guaranteed.",
  },
  {
    id: 3,
    src: tick,
    text: "No No training or maintenance needed.",
  },
];

// CustomerRating

export const rating = [
  {
    id: 1,
    rating: stars,
    text: "the interface is excellent",
    src: capterra,
    alt: "Capterra Logo",
  },
  {
    id: 2,
    rating: stars,
    text: "Improvements in every release",
    src: trustpilot,
    alt: "Trustpilot Logo",
  },
  {
    id: 3,
    rating: stars,
    text: "It is my main workhorse now",
    src: g,
    alt: "G2 Logo",
  },
];

// CustomerReviews

export const reviews = [
  {
    id: 1,
    name: "Wade Warren",
    title: "Founder & CEO, Thunder",
    src: review1,
    text: "Milestone helps me keep a clean, organized ledger that I can access anywhere. The UI is so intuitive that anyone can use it, without any knowledge on the system. I also love the financial reports!",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8",
  },
  {
    id: 2,
    name: "Annette Black",
    title: "CTO, Poppers",
    src: review2,
    text: "We switched to Milestone and immediately saw productivity improvements across our finance team.Milestone makes managing finances incredibly easy.",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8",
  },
  {
    id: 3,
    name: "Cody Fisher",
    title: "CFO, MAYABI",
    src: review3,
    text: "Milestone makes managing finances incredibly easy. Highly recommended!",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    title: "Founder, Pritom",
    src: review4,
    text: "We love the automation features and clean UI. It changed the way we handle expenses.Milestone makes managing finances incredibly easy.",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8",
  },
];
