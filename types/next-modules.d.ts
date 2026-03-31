/* Ensures Next.js subpath imports resolve as modules (fixes "is not a module" TS errors) */
declare module "next" {
  export interface Metadata {
    title?: string | { default: string; template?: string }
    description?: string
    keywords?: string | string[]
    [key: string]: any
  }
}

declare module "next/link" {
  import type { ComponentType } from "react"
  const Link: ComponentType<any>
  export default Link
}

declare module "next/image" {
  import type { ComponentType } from "react"
  const Image: ComponentType<any>
  export default Image
}

declare module "next/navigation" {
  export function usePathname(): string
  export function useRouter(): any
  export function useSearchParams(): any
}

declare module "next/dynamic" {
  import type { ComponentType } from "react"
  const dynamic: (loader: () => Promise<{ default: ComponentType<any> }>, options?: any) => ComponentType<any>
  export default dynamic
}
