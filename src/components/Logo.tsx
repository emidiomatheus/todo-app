import { useTheme } from "styled-components";

export function Logo() {
  const { title } = useTheme()

  return (
    title === 'light' ? (
      <img src="/images/logo.svg" alt="Logo escrita. To.do" width={110} height={30} />
    ) : (
      <img src="/images/logo-light.svg" alt="Logo escrita. To.do" width={110} height={30} />
    )
  )
}