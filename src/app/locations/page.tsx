import { redirect } from "next/navigation";

// The canonical locations hub lives at /service-areas.
export default function LocationsIndex() {
  redirect("/service-areas");
}
