import React from 'react';
import { ServerMap } from '@pinpoint-fe/server-map';
import { getServerMapData } from './data/mock';

export default function Basic () {
  return (
    <div style={{ height: 700, backgroundColor: 'white', border: '1px solid gray' }}>
      <ServerMap
        data={getServerMapData()}
        baseNodeId={'ACL-PORTAL-DEV^SPRING_BOOT'}
      />
    </div>
  )
}