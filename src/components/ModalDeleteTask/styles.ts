import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

export const AlertDialogCancel = styled(AlertDialog.Cancel)`
  background-color: ${props => props.theme.colors.gray[300]};
  color: #fff;
`

export const AlertDialogAction = styled(AlertDialog.Action)`
  background-color: ${props => props.theme.colors.red};
  color: #fff;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const AlertDialogContent = styled(AlertDialog.Content)`
  outline: 0;
  width: 100%;
  max-width: 560px;
  background: ${props => props.theme.colors.background};
  padding: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
`

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
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

export const AlertDialogTitle = styled(AlertDialog.Title)`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 1rem;
`