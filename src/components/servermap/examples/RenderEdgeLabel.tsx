import React from 'react';
import { MergedEdge, MergedNode, ServerMap } from '@pinpoint-fe/server-map';
import { getServerMapData } from './data/mock';

export default function RenderEdgeLabel () {
  const renderNodeLabel = (node: MergedNode) => {
    if (node.nodes?.length > 0) {
      return 'This Node is Merged!'
    } 
  }
  
  const renderEdgeLabel = (edge: MergedEdge) => {
    if (edge.edges?.length > 0) {
      return 'This Edge is Merged!';
    } 
    return 'This Edge is not merged';
  }
  
  return (
    <div style={{ height: 700, backgroundColor: 'white', border: '1px solid gray' }}>
      <ServerMap
        data={getServerMapData()}
        baseNodeId={'ACL-PORTAL-DEV^SPRING_BOOT'}
        renderNodeLabel={renderNodeLabel}
        renderEdgeLabel={renderEdgeLabel}
      />
    </div>
  )
}