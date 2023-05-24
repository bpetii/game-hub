import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: Relevance</MenuButton>
            <MenuList>
                <MenuItem>Menu 1</MenuItem>
                <MenuItem>Menu 2</MenuItem>
                <MenuItem>Menu 3</MenuItem>
                <MenuItem>Menu 4</MenuItem>
                <MenuItem>Menu 5</MenuItem>
                <MenuItem>Menu 6</MenuItem>

            </MenuList>
        </Menu>
    )
}

export default SortSelector;