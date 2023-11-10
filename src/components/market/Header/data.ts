import useSWR from "swr";

export function useHover() {
  const { data: isHover, mutate: mutateIsHover } =
    useSWR<boolean>("@state/hover");

  return { isHover, mutateIsHover };
}
