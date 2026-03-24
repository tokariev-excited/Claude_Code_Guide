import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
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
        description="Connect GitHub to Vercel and get a shareable URL."
      />

      <h3 id="connect-github-vercel" className="scroll-mt-20">17.1. Connect GitHub and Vercel</h3>

      <StepList steps={[
        { title: "Go to https://vercel.com and ensure you are logged in with your GitHub account." },
        { title: "If prompted, grant Vercel access to your GitHub repositories (you can limit access to this single repo)." },
      ]} />

      <h3 id="create-vercel-project" className="scroll-mt-20">17.2. Create a Vercel project from your GitHub repo</h3>

      <StepList steps={[
        { title: "In the Vercel dashboard, click Add New \u2192 Project." },
        { title: "In the list of Git repositories, find and select dashboard-prototype." },
        {
          title: "Check the settings:",
          children: (
            <ul className="list-disc list-inside text-muted-foreground leading-7 mt-1 space-y-1">
              <li>Framework preset: should automatically show <ProductBadge name="nextjs" />.</li>
              <li>Root Directory: <code className="text-xs bg-muted px-1 py-0.5 rounded">./</code> (unless your app lives in a subfolder).</li>
            </ul>
          ),
        },
        { title: "Click Deploy." },
      ]} />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="vercel" /> will install dependencies, build your <ProductBadge name="nextjs" /> app, and then show a live deployment URL such as <code className="text-xs bg-muted px-1 py-0.5 rounded">https://dashboard-prototype.vercel.app</code>.
      </p>

      <h3 id="auto-updates" className="scroll-mt-20">17.3. Automatic updates on every push</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Any time you update the app with <ProductBadge name="claude" />, commit and push again:
      </p>

      <CodeBlock code={`git add .
git commit -m "Describe the change briefly"
git push`} language="bash" />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="vercel" /> will automatically create a new deployment based on the latest code. The live URL remains stable, but the content updates to the newest version.
      </p>

      <Callout variant="tip" title="Zero-config CI/CD">
        Every <ProductBadge name="git" /> push triggers a new <ProductBadge name="vercel" /> deployment automatically. No extra configuration needed.
      </Callout>
    </section>
  )
}
