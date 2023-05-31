import React, { FC } from 'react'
import { Dropdown } from 'antd'
import { MenuProps } from 'antd/es/menu';
import { Text } from '@chakra-ui/react';

interface DropownProps {
  filter: {
    option: number,
    name: string
  },
  setFilter: React.Dispatch<React.SetStateAction<{
    option: number;
    name: string;
  }>>
}

const CustomDropdown: FC<DropownProps> = (props) => {
  const { filter, setFilter } = props;
  console.log(filter)

  const items: MenuProps['items'] = [
    {
      label: <Text>Price High to Low</Text>,
      key: '0',
      onClick: () => setFilter({ ...filter, option: 0, name: "Price High to Low" })
    },
    {
      label: <Text >Price Low to High</Text>,
      key: '1',
      onClick: () => setFilter({ ...filter, option: 1, name: "Price Low to High" })
    },
    {
      label: <Text>Rating</Text>,
      key: '3',
      onClick: () => setFilter({ ...filter, option: 2, name: "Rating" })
    },
    {
      label: <Text>Default</Text>,
      key: '3',
      onClick: () => setFilter({ ...filter, option: -1, name: "" })
    },
  ];
  return (
    <Dropdown menu={{ items }} cursor-pointer>
      <Text cursor="pointer" w="10rem" h="2rem" borderRadius="0.25rem" border="1px solid" borderColor="blackAlpha.400" display="flex" justifyContent="center" alignItems="center">{filter?.name || "Select an Option "}</Text>
    </Dropdown>

  )
}

export default CustomDropdown
