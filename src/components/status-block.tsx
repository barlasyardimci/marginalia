import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StatusBlock({
  title,
  body,
  href,
  action,
}: {
  title: string;
  body: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed bg-card px-5 py-8">
      <h2 className="font-heading text-2xl">{title}</h2>
      <p className="mt-2 max-w-xl text-muted-foreground">{body}</p>
      {href && action ? (
        <Button className="mt-5 h-10 px-4" render={<Link href={href} />}>
          {action}
        </Button>
      ) : null}
    </div>
  );
}
