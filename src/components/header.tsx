import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>
          <Image
            width={24}
            height={24}
            alt="user-photo"
            className="h-6 w-6 rounded-full"
            src="https://github.com/thiagolago1.png"
          />
        </Link>
      </div>
    </div>
  )
}