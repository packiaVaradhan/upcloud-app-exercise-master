import React from 'react';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHead';
import CardContent from 'components//Card/CardContent';
import CardSection from 'components/Card/CardSection';
import Button from 'components/Button/Button';
import { IServer, IStorage } from 'upcloud';

const Welcome = (props: any) => {
  let pageContent = null;
  if (props.content === 'servers')
    pageContent = (
      <Card key={props.content}>
        <CardHeader key="server" title={'Servers'} />
        <hr />
        {props.data.data.map((serverData: IServer, index: any) => {
          return (
            <CardSection key={index}>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button secondary={serverData.state === 'stopped'} />
                  <div style={{ marginLeft: '1rem' }}>
                    <div>{serverData?.title}</div>
                    <div>{`HostName: ${serverData?.hostname}`}</div>{' '}
                  </div>
                </div>
              </CardContent>
            </CardSection>
          );
        })}
      </Card>
    );
  else {
    pageContent = (
      <Card key={props.content}>
        <CardHeader key="storage" title={'Storages'} />
        <hr />

        {props.data.data.map((storageData: IStorage, index: any) => {
          return (
            <CardSection key={index}>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <div>{`${storageData?.title}(${storageData?.size} GB)`}</div>
                  </div>
                </div>
              </CardContent>
            </CardSection>
          );
        })}
      </Card>
    );
  }
  return <>{pageContent}</>;
};

export default Welcome;
