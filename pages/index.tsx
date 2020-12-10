import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import Router, { useRouter } from 'next/router';
import { getServers } from '../api/server';
import { getStorage } from '../api/storage';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHead';
import Welcome from 'components/Welcome';

const Home = ({ serversdata, storagesdata }: any) => {
  const router = useRouter();
  const qry = router.query;
  let link = qry.route;
  if (!link) {
    link = 'servers';
  }
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);
  let content = null;
  if (isLoading)
    content = (
      <Card>
        <Loader />
      </Card>
    );
  else if (!serversdata || !storagesdata)
    content = (
      <div style={{ textAlign: 'center' }}>
        <Card>
          <CardHeader
            title={
              'Oops! Something went wrong..We will try to fix it as soon as possible..'
            }
          />
        </Card>
      </div>
    );
  else {
    content = (
      <main>
        {link === 'storages' ? (
          <Welcome data={storagesdata} content={'storages'} />
        ) : (
            <Welcome data={serversdata} content={'servers'} />
          )}
      </main>
    );
  }
  return <div style={{ overflow: 'scroll' }}>{content}</div>;
};

export async function getStaticProps(ctx: any) {
  try {
    const [serversdata, storagesdata] = await Promise.all([
      getServers(),
      getStorage(),
    ]);
    return {
      props: { serversdata, storagesdata },
      revalidate: 1,
    };
  } catch (error) {
    error.ctx = ctx;
    return {
      props: {},
      revalidate: 1,
    };
  }
}
export default Home;
