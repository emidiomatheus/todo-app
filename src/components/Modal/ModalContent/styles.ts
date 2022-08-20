import { DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Content = styled(DialogContent)`
  outline: 0;
  width: 100%;
  max-width: 760px;
  background: ${props => props.theme.colors.background};
  padding: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
`

export const ModalOverlay = styled(DialogOverlay)`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

