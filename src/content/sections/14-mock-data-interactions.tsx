import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function MockDataInteractions() {
  return (
    <section>
      <SectionHeader
        id="mock-data-interactions"
        number={14}
        title="Mock Data & Interactions"
        description="Add realistic mock data and client-side behavior."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You want the prototype to &quot;feel live&quot; without a real backend or database: clicking filters, submitting forms, seeing table updates.
      </p>

      <h3 id="create-mock-data" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Create Mock Data Files</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        From the project root Claude session, say:
      </p>

      <PromptBlock>{`We want to add realistic mock data for the Users list, without any real backend.

Task:
- Create a src/data folder if it does not exist.
- Inside it, create src/data/mockUsers.ts.
- In that file, export an array of 20-30 user objects with realistic fields: id, name, email, role, status, createdAt.
- Use roles like "Admin", "Manager", "Viewer" and statuses like "Active", "Invited", "Suspended".

Please show the new file contents once created.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will create the folder and file for you and populate them with sample data.
      </p>

      <h3 id="use-mock-data" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Use Mock Data on Pages</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Prompt:
      </p>

      <PromptBlock>{`On the Users page, instead of any hardcoded rows, we want to use the mockUsers array.

Task:
- Import the mockUsers array from src/data/mockUsers.
- Pass it as a prop into the UsersTable component.
- Make sure the table renders the correct columns and values using our design.

Show me the changes in the Users page and UsersTable component.`}</PromptBlock>

      <h3 id="add-filters-search" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Add Filters and Search</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        If your Figma design includes filters and/or a search bar:
      </p>

      <PromptBlock>{`We want basic client-side filters and search on the Users page, using only mockUsers (no backend).

Task:
- Convert the Users page into a Client Component if it is not already (add 'use client' at the top).
- Introduce React state for:
  - selected role filter,
  - selected status filter,
  - search text.
- Filter the mockUsers array in memory based on these states.
- Hook the filters and search input in the UI to this state.

Please update the Users page and any related components, keeping the visuals aligned with the Figma design.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You now have an interactive Users page with live-feeling behavior entirely on the front end.
      </p>

      <Callout variant="tip" title="No backend needed">
        All filtering and searching happens in the browser using the mock data array. This is enough for a realistic prototype that stakeholders can click through and evaluate.
      </Callout>
    </section>
  )
}
