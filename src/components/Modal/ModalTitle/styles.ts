import { DialogTitle } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Title = styled(DialogTitle)`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 2rem;
`