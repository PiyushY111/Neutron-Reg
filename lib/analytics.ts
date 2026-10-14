import posthog from "posthog-js";

export const POSTHOG_KEY = "phc_oLm8fb7L4CXDqGdJcc7a6boCtR8rVjf6dNx7G995eGdy";
export const POSTHOG_APP = "neutron-reg";

type EventProperties = Record<string, string | number | boolean | string[] | null | undefined>;

export function captureEvent(event: string, properties?: EventProperties) {
  if (!posthog.__loaded) return;
  posthog.capture(event, properties);
}
