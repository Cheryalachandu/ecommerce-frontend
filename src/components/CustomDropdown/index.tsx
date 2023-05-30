import React, { FC } from 'react'
import { Dropdown } from 'antd'
import { MenuProps } from 'antd/es/menu';
import { Text } from '@chakra-ui/react';

const CustomDropdown: FC = () => {
  const items: MenuProps['items'] = [
    {
      label: <Text>Label 1</Text>,
      key: '0',
    },
    {
      label: <Text>Label 2</Text>,
      key: '1',
    },
    {
      label:<Text>Label 3</Text>,
      key: '3',
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Text w="10rem">Dropdown</Text>
    </Dropdown>

  )
}

export default CustomDropdown
