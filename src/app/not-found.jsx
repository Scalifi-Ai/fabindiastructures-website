import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "PJ Fab India | Page Not Found"
}

export default function NotFound() {
    return (
        <div className="mx-auto max-w-7xl px-8 py-16">
            <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center gap-5 h-[83vh]">
                <h2 className="font-black text-gray-200 text-9xl">404</h2>
                <p className="text-xl font-semibold text-gray-800">
                    Page not found
                </p>
                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <Button
                            variant="outline"
                            className="rounded-md px-6 py-2 w-fit font-semibold"
                        >
                            <Home className="mr-3 h-4 w-4" />
                            Go to home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}