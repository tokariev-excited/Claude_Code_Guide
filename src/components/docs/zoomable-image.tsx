"use client"

import { Dialog } from "@base-ui/react/dialog"
import { XIcon, ZoomInIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <button
            type="button"
            className={cn(
              "group relative block w-full cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              className
            )}
          />
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-150 group-hover:bg-black/25">
          <ZoomInIcon className="h-7 w-7 text-white opacity-0 drop-shadow transition-opacity duration-150 group-hover:opacity-100" />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0"
        />
        <Dialog.Popup
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center p-4 transition-all duration-200 data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-starting-style:scale-[0.97] data-starting-style:opacity-0 sm:p-10"
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl border border-border object-contain shadow-2xl"
            />
            <Dialog.Close
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="absolute -right-3 -top-3 border border-border bg-popover shadow-md hover:bg-muted"
                />
              }
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
