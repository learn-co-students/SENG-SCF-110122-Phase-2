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
// const ListItem = styled.li`
//   padding: 4px 16px;
//   background: ${props => {
//     const divisibleBy3 = props.number % 3 === 0;
//     const divisibleBy5 = props.number % 5 === 0;
//     if (divisibleBy3 && divisibleBy5){
//       return 'lightgreen'
//     } else if (divisibleBy3) {
//       return 'aliceblue'
//     } else if (divisibleBy5) {
//       return 'lemonchiffon'
//     } else {
//       return 'white'
//     }
//   }};
// `;
const ListItem = styled.li`
  padding: 4px 16px;
  background: ${props => {
    if (props.divisibleBy3 && props.divisibleBy5){
      return 'lightgreen'
    } else if (props.divisibleBy3) {
      return 'aliceblue'
    } else if (props.divisibleBy5) {
      return 'lemonchiffon'
    } else {
      return 'white'
    }
  }};
`;

// When we are using props 

// 1. where we mount the styled component we need to determine what type of prop will be passed in to that components
// 2. Inside of the styled component, determine which css rules the props will determine the value for 
// 3. For teh CSS rule that is going to use the prop, we need to interpolate a callback function that receives props as an argument and then returns some values based on the condition


// const items = ["Check", "Out", "This", "Great", "List"];

// creating an empty array
// and then looping 100 times and pushing each number into the items array
const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}

// i.e. [1,2,3,4....100]

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={item} isEven={(index + 1) % 2 === 0} number={item} divisibleBy3={(item % 3 === 0)} divisibleBy5={(item % 5 === 0)}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
