import Link from "next/link";
import { sarpanch } from "@/utils/fonts"
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  href: string;
  className?: string;
  text: string;
}

const LinkCTA = ({ href, className = '', text }: Props) => {
  return (
    <Link 
      href={href} 
      className={[
        "link-hover", 
        className,
        sarpanch.className
      ].join(' ')}
    >
      {text}
      <FaArrowRight />
    </Link>
  )
}

export default LinkCTA