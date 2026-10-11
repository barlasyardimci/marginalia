import { StatusBlock } from "@/components/status-block";

export default function NotFound() {
  return (
    <StatusBlock
      title="That page is not in the notes"
      body="The topic or address does not match anything in this study desk."
      href="/"
      action="Back to topics"
    />
  );
}
