import { useField } from '@unform/core';
import {
  ReactNode,
  useEffect,
  useRef
} from 'react';
import { RadioBoxType } from './styles';

interface Props {
  children: ReactNode;
  name: string;
  isActive: boolean;
  activeColor: 'green' | 'red' | 'yellow';
}

type RadioBoxProps = JSX.IntrinsicElements['div'] & Props

const RadioBox = ({ children, name, isActive, activeColor, ...rest }: RadioBoxProps) => {
  const radioBoxRef = useRef<HTMLDivElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioBoxRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
      <RadioBoxType
        name="type"
        ref={radioBoxRef}
        activeColor={activeColor}
        isActive={isActive}
      >{children}</RadioBoxType>
  );
};

export default RadioBox;