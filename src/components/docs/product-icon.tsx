import { cn } from "@/lib/utils"

// --- SVG brand icons ---

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 22.5" fill="none" aria-hidden="true" {...props}>
      {/* Top-left: red */}
      <path d="M0 3.75C0 1.679 1.679 0 3.75 0H7.5v7.5H3.75C1.679 7.5 0 5.821 0 3.75z" fill="#F24E1E" />
      {/* Top-right: orange */}
      <path d="M7.5 0h3.75C13.321 0 15 1.679 15 3.75S13.321 7.5 11.25 7.5H7.5V0z" fill="#FF7262" />
      {/* Middle-left: purple */}
      <path d="M0 11.25c0-2.071 1.679-3.75 3.75-3.75H7.5v7.5H3.75C1.679 15 0 13.321 0 11.25z" fill="#A259FF" />
      {/* Middle-right: blue */}
      <circle cx="11.25" cy="11.25" r="3.75" fill="#1ABCFE" />
      {/* Bottom-left: green */}
      <path d="M3.75 15H7.5v3.75C7.5 20.821 5.821 22.5 3.75 22.5S0 20.821 0 18.75 1.679 15 3.75 15z" fill="#0ACF83" />
    </svg>
  )
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function VercelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 22.525H0L12 1.475z" />
    </svg>
  )
}

function CursorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {/* Faceted hexagon – Cursor logo */}
      {/* Top-left facet */}
      <path d="M12 1 L2.5 6.5 L12 9.5 Z" fill="#D0D0D0" />
      {/* Top-right facet */}
      <path d="M12 1 L21.5 6.5 L12 9.5 Z" fill="#B0B0B0" />
      {/* Center dark band */}
      <path d="M2.5 6.5 L21.5 6.5 L12 13 Z" fill="#1A1A1A" />
      {/* Bottom-left facet */}
      <path d="M2.5 6.5 L2.5 17.5 L12 23 L12 13 Z" fill="#808080" />
      {/* Bottom-right facet */}
      <path d="M21.5 6.5 L21.5 17.5 L12 23 L12 13 Z" fill="#404040" />
      {/* Inner arrow highlight */}
      <path d="M12 13 L21.5 17.5 L12 23 Z" fill="#606060" />
    </svg>
  )
}

function ClaudeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 509.64" fill="none" aria-hidden="true" {...props}>
      <path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z" />
      <path fill="#FCF2EE" fillRule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z" />
    </svg>
  )
}

function StorybookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="2" width="18" height="20" rx="2" fill="#FF4785" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function NodejsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2L3 7v10l9 5 9-5V7L12 2z"
        fill="#339933"
        stroke="none"
      />
      <path
        d="M8.5 9v6l3.5 2 3.5-2V9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function NextjsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.19 338.19 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.105-.068a.438.438 0 0 1-.149-.137l-.048-.09-.005-4.703-.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.478 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.465-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C22.24 3.928 19.028.14 14.68.037 14.306.027 11.682-.002 11.572 0z" />
    </svg>
  )
}

function GitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="2.5" fill="#F05032" />
      <circle cx="18" cy="6" r="2.5" fill="#F05032" />
      <circle cx="6" cy="18" r="2.5" fill="#F05032" />
      <path d="M6 8.5v7M6 8.5l12-3" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function TailwindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  )
}

// --- Product config ---

type ProductName =
  | "figma"
  | "cursor"
  | "claude"
  | "github"
  | "vercel"
  | "storybook"
  | "nodejs"
  | "nextjs"
  | "git"
  | "tailwind"

interface ProductConfig {
  label: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}

const products: Record<ProductName, ProductConfig> = {
  figma:     { label: "Figma",      Icon: FigmaIcon },
  cursor:    { label: "Cursor",     Icon: CursorIcon,    className: "text-foreground" },
  claude:    { label: "Claude Code", Icon: ClaudeIcon },
  github:    { label: "GitHub",     Icon: GitHubIcon,    className: "text-foreground" },
  vercel:    { label: "Vercel",     Icon: VercelIcon,    className: "text-foreground" },
  storybook: { label: "Storybook",  Icon: StorybookIcon },
  nodejs:    { label: "Node.js",    Icon: NodejsIcon },
  nextjs:    { label: "Next.js",    Icon: NextjsIcon,    className: "text-foreground" },
  git:       { label: "Git",        Icon: GitIcon },
  tailwind:  { label: "Tailwind CSS", Icon: TailwindIcon },
}

interface ProductBadgeProps {
  name: ProductName
  className?: string
}

/**
 * Inline product badge with brand icon + name.
 * Usage: <ProductBadge name="figma" />
 */
export function ProductBadge({ name, className }: ProductBadgeProps) {
  const config = products[name]
  const { Icon } = config

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-foreground whitespace-nowrap",
        className
      )}
    >
      <Icon
        width={13}
        height={13}
        className={cn("shrink-0 inline", config.className)}
      />
      {config.label}
    </span>
  )
}
