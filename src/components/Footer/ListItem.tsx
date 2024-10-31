import { NavigationLink } from "@/types";
import { GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";

type ListItemProps={
    title:string,
    List:NavigationLink[]
} 
function ListItem({title,List}:ListItemProps){
return(
    <GridItem as="ul" textAlign='left' flexDirection="column" justifyItems='center' gapY="4" colSpan={1} style={{color: "#475569"}}>
          <Text textStyle="md">
           {title}
          </Text>
          {List.map((item) => (
            <li key={item.key}  style={{padding:'12px 12px 12px 0',textAlign:"left"}}>
              <Link href={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </GridItem>
)
}
export default ListItem;