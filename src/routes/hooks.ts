import { useRouter as useNextRouter } from "next/navigation";

// ----------------------------------------------------------------------

export function useRouter() {
  const router = useNextRouter();

  return {
    ...router,
    push: (href: string) => router.push(href),
    replace: (href: string) => router.replace(href),
    back: () => router.back(),
    forward: () => router.forward(),
    refresh: () => router.refresh(),
  };
}
