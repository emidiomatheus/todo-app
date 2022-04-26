import Image from "next/image";
import { useTheme } from "styled-components";

export function Logo() {
  const { title } = useTheme()

  return (
    title === 'light' ? (
      <Image src="/images/logo.svg" alt="Logo escrita. To.do" width={110} height={30} />
    ) : (
      <Image src="/images/logo-light.svg" alt="Logo escrita. To.do" width={110} height={30} />
    )
  )
}