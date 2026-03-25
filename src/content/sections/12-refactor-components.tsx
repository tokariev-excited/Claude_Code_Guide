import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function RefactorComponents() {
  return (
    <section>
      <SectionHeader
        id="refine-components"
        number={12}
        title="Refining Components with Screenshots"
        description="Use screenshots to visually compare and refine your components."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude Code supports pasting <strong className="text-foreground">screenshots</strong> directly into the conversation, which is very useful for visual refinement.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        The pattern for screenshot-based refinement:
      </p>

      <StepList steps={[
        { title: "In your browser, open Storybook or the running app and take a screenshot of the current implementation." },
        { title: "In Figma, take a screenshot of the target design if needed." },
        { title: "In Cursor's terminal with Claude, paste one or more screenshots (via your OS clipboard)." },
        { title: "Immediately after pasting, describe where the screenshot comes from (Storybook, Dashboard page, etc.), what is wrong (spacing, alignment, colors, typography), and what you expect to see instead." },
      ]} />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example prompt after pasting screenshots:
      </p>

      <PromptBlock>{`I have pasted two screenshots:

- The first is the current implementation of the Dashboard cards.
- The second is the target design from Figma.

Please compare them carefully and update the relevant components so that:

- Card padding and spacing match the Figma design.
- Typography (font size, weight, line height) matches.
- The grid layout and gaps between cards are correct.

Only change the components and layout that are clearly different; do not introduce new design ideas.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will use both screenshots and your text to adjust the code in a targeted way.
      </p>

      <Callout variant="tip" title="Be specific about differences">
        The more precise your feedback, the faster Claude can fix visual issues. Instead of saying &quot;it looks wrong,&quot; list concrete issues like &quot;the card padding is too large&quot; or &quot;the heading font size should be smaller.&quot;
      </Callout>
    </section>
  )
}
