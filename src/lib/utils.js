import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export const getColumns = (data) => {
  const columns = Object.keys(data[0])?.filter(item => item !== "id")?.map(item => {
    return (
      {
        accessorKey: item,
        header: item.split("_").join(" "),
      }
    )
  })
  return columns
}