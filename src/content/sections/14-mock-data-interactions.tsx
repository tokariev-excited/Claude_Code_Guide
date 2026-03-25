import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function MockDataInteractions() {
  return (
    <section>
      <SectionHeader
        id="mock-data-interactions"
        number={14}
        title="Add Mock Data and Client-Side Behavior"
        description="Add realistic mock data and client-side interactions."
      />

      <h3 id="create-mock-data" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">14.1. Create Mock Data Files</h3>

      <PromptBlock>{`We want realistic mock data for the Users page, without any backend.

Task:

1) Create a src/data folder if it does not exist.
2) Inside it, create src/data/mockUsers.ts.
3) In that file, export an array of 20–30 user objects with these fields:
   - id
   - name
   - email
   - role (Admin, Manager, Viewer, etc.)
   - status (Active, Invited, Suspended, etc.)
   - createdAt

Please show me the contents of mockUsers.ts after you create it.`}</PromptBlock>

      <h3 id="use-mock-data" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">14.2. Connect Mock Data to the Users Page</h3>

      <PromptBlock>{`On the Users page, we want to use the mockUsers array instead of hard-coded rows.

Please:

1) Import mockUsers from src/data/mockUsers in the Users page.
2) Pass mockUsers into the UsersTable component as a prop.
3) Ensure the table renders correct data for name, email, role, status and createdAt.

Show me the diff for the Users page and UsersTable.`}</PromptBlock>

      <h3 id="add-filters-search" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">14.3. Implement Filters and Search</h3>

      <PromptBlock>{`We need simple client-side filtering and search on the Users page.

Task:

1) Turn the Users page into a client component if it is not already.
2) Add React state for:
   - role filter,
   - status filter,
   - search text.
3) Filter the mockUsers array in memory based on this state.
4) Wire the UI controls (selects, chips, search input) to the state.
5) Ensure the filtered array is passed into UsersTable.

Do not introduce any backend calls or APIs. Everything should stay on the client.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Now the Users page feels &quot;live&quot; while still using only mock data.
      </p>

      <Callout variant="tip" title="No backend needed">
        All filtering and searching happens in the browser using the mock data array. This is enough for a realistic prototype that stakeholders can click through and evaluate.
      </Callout>
    </section>
  )
}
