import styled from 'styled-components';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';

const MyLayout = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    height: 80%;
  }
`;

function DefaultLayout({ children }: any) {
  return (
    <MyLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </MyLayout>
  );
}

export default DefaultLayout;
