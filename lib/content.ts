import directoryData from "@/content/directory.json";
import eventsData from "@/content/events.json";
import statsData from "@/content/stats.json";
import jobsData from "@/content/jobs.json";
import faqData from "@/content/faq.json";
import partnersData from "@/content/partners.json";
import testimonialsData from "@/content/testimonials.json";
import circlesData from "@/content/circles.json";
import articlesData from "@/content/articles.json";
import sectionsData from "@/content/sections.json";
import type {
  DirectoryProfile,
  Event,
  Stat,
  Job,
  FAQ,
  Partner,
  Testimonial,
  Circle,
  Article,
  PageSection,
} from "./types";

export async function getEvents(): Promise<Event[]> {
  return eventsData as Event[];
}

export async function getUpcomingEvents(): Promise<Event[]> {
  const events = (eventsData as Event[]).filter(
    (e) => e.status === "upcoming" || new Date(e.date) >= new Date()
  );
  return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getPastEvents(): Promise<Event[]> {
  const events = (eventsData as Event[]).filter(
    (e) => e.status === "past" || new Date(e.date) < new Date()
  );
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNextFeaturedEvent(): Promise<Event | null> {
  const upcoming = await getUpcomingEvents();
  const featured = upcoming.find((e) => e.isFeatured);
  return featured || upcoming[0] || null;
}

export async function getDirectoryProfiles(): Promise<DirectoryProfile[]> {
  return directoryData.profiles as DirectoryProfile[];
}

export async function getJobs(): Promise<Job[]> {
  return jobsData as Job[];
}

export async function getStats(): Promise<Stat[]> {
  return statsData as Stat[];
}

export async function getFaqs(): Promise<FAQ[]> {
  return faqData as FAQ[];
}

export async function getPartners(): Promise<Partner[]> {
  return partnersData as Partner[];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonialsData as Testimonial[];
}

export async function getCircles(): Promise<Circle[]> {
  return circlesData as Circle[];
}

export async function getArticles(): Promise<Article[]> {
  return articlesData as Article[];
}

export async function getHomepageSections(): Promise<PageSection[]> {
  return (sectionsData as PageSection[]).filter((s) => s.enabled).sort((a, b) => a.order - b.order);
}
