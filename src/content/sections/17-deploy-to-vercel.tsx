import { SectionHeader } from "@/components/docs/section-header"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function DeployToVercel() {
  return (
    <section>
      <SectionHeader
        id="deploy-to-vercel"
        number={17}
        title="Deploy to Vercel"
        description="Import your GitHub project into Vercel and get a live URL."
      />

      <h3 id="import-project-github" className="scroll-mt-20">17.1. Import the Project from GitHub</h3>

      <StepList steps={[
        { title: "Go to Vercel and click Add New \u2192 Project." },
        { title: "Choose your dashboard-prototype repo from the list." },
        { title: "Confirm that the framework preset is Next.js." },
        { title: "Keep the default root directory." },
        { title: "Click Deploy." },
      ]} />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="vercel" /> will install dependencies, build the <ProductBadge name="nextjs" /> project, deploy it and give you a live URL.
      </p>

      <h3 id="auto-redeploys" className="scroll-mt-20">17.2. Automatic Redeploys</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Whenever you update the project:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Ask <ProductBadge name="claude" /> to implement the required changes.</li>
        <li>Commit in <ProductBadge name="git" />.</li>
        <li>Push to <ProductBadge name="github" />.</li>
      </ul>

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="vercel" /> will automatically create a new deployment for the latest commit. The main production URL stays the same; the content updates.
      </p>

      <Callout variant="tip" title="Zero-config CI/CD">
        Every <ProductBadge name="git" /> push triggers a new <ProductBadge name="vercel" /> deployment automatically. No extra configuration needed.
      </Callout>
    </section>
  )
}
