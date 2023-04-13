import { Profile } from '../components/Profile/Profile';
import user from "../user.json";
import data from "../data.json";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Statistics } from '../components/Statistics/Statistics';

export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics item={data}/>
      <GlobalStyle/>
    </Layout>
  );
};
