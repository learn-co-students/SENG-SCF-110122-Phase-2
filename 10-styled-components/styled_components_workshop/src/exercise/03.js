import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 16px;
  padding: 16px;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

// ✅ use the isEven prop in this component to change the background color for even rows!
const ListItem = styled.li`
  padding: 4px 16px;
  background: ${props => {
    // console.log(props.key)
    return props.isEven && "green"}};
`;

// const items = ["Check", "Out", "This", "Great", "List"];

const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}


function List() {
  return (
    <UnorderedList>
      {items.map((item, i) => (
        <ListItem key={item} isEven={(i + 1) % 2 === 0}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default List
