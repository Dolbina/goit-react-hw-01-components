import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p {
  margin: 0;
}
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

table {
  border-collapse: collapse;
  border: 1px solid gray;
  
  
}

td, th {
  border: 1px solid gray;
  padding: 10px 20px;
}

th {
  background-color: #499579;
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: white;
}

tr:nth-child(odd) td {
  background-color: rgb(245,245,245);
}

caption {
  padding: 10px;
}
`;

