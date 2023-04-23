import { DropdownCode, DropdownExample } from '@/ui/configurators/components/Dropdown.example';

export const DropdownConfig = {
  example: DropdownExample,
  default: DropdownCode,
  state: {
    tone: 'solid',
    chevronRotation: true,
    color: 'white',
    initiallyOpen: true,
    itemColor: 'blue',
    mode: 'spacey',
    placement: 'bottom',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
    trigger: 'click',
    withChevron: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'selector',
      options: ['solid', 'light'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'zinc', 'slate'],
    },
    {
      label: 'Item Color',
      name: 'itemColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Mode',
      name: 'mode',
      type: 'selector',
      options: ['tight', 'spacey'],
    },
    {
      label: 'Placement',
      name: 'placement',
      type: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'selector',
      options: ['none', 'sm', 'base', 'md'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Trigger',
      name: 'trigger',
      type: 'selector',
      options: ['click', 'hover'],
    },
    {
      label: 'With chevron',
      name: 'withChevron',
      type: 'switch',
    },
    {
      label: 'Chevron rotation',
      name: 'chevronRotation',
      type: 'switch',
    },
  ],
};