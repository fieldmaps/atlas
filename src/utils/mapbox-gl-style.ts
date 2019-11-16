const style = {
  version: 8,
  glyphs: '/fonts/{fontstack}/{range}.pbf',
  sources: {
    admin0: { type: 'geojson', data: '/data/admin0.json' },
    admin1: { type: 'geojson', data: '/data/admin1.json' },
    admin2: { type: 'geojson', data: '/data/admin2.json' },
    camps: { type: 'geojson', data: '/data/camps.json' },
    lakes: { type: 'geojson', data: '/data/lakes.json' },
    marshlands: { type: 'geojson', data: '/data/marshlands.json' },
    parks: { type: 'geojson', data: '/data/parks.json' },
    rivers: { type: 'geojson', data: '/data/rivers.json' },
    roads: { type: 'geojson', data: '/data/roads.json' },
    settlements: { type: 'geojson', data: '/data/settlements.json' },
    undArea: { type: 'geojson', data: '/data/undArea.json' },
  },
  layers: [
    // {
    //   id: 'background',
    //   type: 'background',
    //   paint: { 'background-color': '#F3F3F3' },
    // },
    {
      id: 'parks',
      source: 'parks',
      type: 'fill',
      paint: { 'fill-color': '#DAE3D9' },
    },
    {
      id: 'marshlands',
      source: 'marshlands',
      type: 'fill',
      paint: { 'fill-color': '#B6DAE7' },
    },
    {
      filter: ['==', 'w', 3],
      id: 'rivers-3',
      minzoom: 8,
      paint: { 'line-color': '#94CCDC', 'line-width': 1 },
      source: 'rivers',
      type: 'line',
    },
    {
      filter: ['==', 'w', 2],
      id: 'rivers-2',
      minzoom: 7,
      paint: { 'line-color': '#94CCDC', 'line-width': 2 },
      source: 'rivers',
      type: 'line',
    },
    {
      filter: ['==', 'w', 1],
      id: 'rivers-1',
      paint: { 'line-color': '#94CCDC', 'line-width': 3 },
      source: 'rivers',
      type: 'line',
    },
    {
      id: 'lakes',
      source: 'lakes',
      type: 'fill',
      paint: { 'fill-color': '#56B3CD' },
    },
    {
      filter: ['==', 'r', 1],
      id: 'roads-primary',
      paint: {
        'line-color': '#F69E61',
        'line-gap-width': 1,
        'line-width': 1,
      },
      source: 'roads',
      type: 'line',
    },
    {
      filter: ['==', 'r', 2],
      id: 'roads-secondary',
      minzoom: 6,
      paint: {
        'line-color': '#F69E61',
        'line-width': 1,
      },
      source: 'roads',
      type: 'line',
    },
    {
      filter: ['==', 'r', 3],
      id: 'roads-tertiary',
      minzoom: 7,
      paint: {
        'line-color': '#F69E61',
        'line-dasharray': [2, 2],
        'line-width': 1,
      },
      source: 'roads',
      type: 'line',
    },
    {
      id: 'admin0',
      source: 'admin0',
      type: 'line',
      paint: { 'line-color': 'black', 'line-width': 3 },
    },
    {
      id: 'undArea',
      source: 'undArea',
      type: 'line',
      paint: {
        'line-color': 'black',
        'line-dasharray': [2, 2],
        'line-width': 3,
      },
    },
    {
      id: 'admin1',
      source: 'admin1',
      type: 'line',
      paint: { 'line-color': 'black', 'line-width': 2 },
    },
    {
      id: 'admin2',
      source: 'admin2',
      type: 'line',
      minzoom: 5,
      paint: {
        'line-color': 'black',
        'line-dasharray': [2, 2],
        'line-width': 1,
      },
    },
    {
      filter: ['>=', 's', 6],
      id: 'settlements-6',
      minzoom: 7,
      paint: {
        'circle-color': '#56585A',
        'circle-radius': {
          stops: [[7, 0], [10, 3]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['==', 's', 5],
      id: 'settlements-5',
      minzoom: 6,
      paint: {
        'circle-color': '#56585A',
        'circle-radius': {
          stops: [[7, 0], [8, 3]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['==', 's', 4],
      id: 'settlements-4',
      minzoom: 6,
      paint: {
        'circle-color': '#56585A',
        'circle-radius': {
          stops: [[6, 0], [7, 3]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['==', 's', 3],
      id: 'settlements-3',
      minzoom: 5,
      paint: {
        'circle-color': '#A5C89F',
        'circle-radius': {
          stops: [[5, 0], [6, 5]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['==', 's', 2],
      id: 'settlements-2',
      paint: {
        'circle-color': '#0167AA',
        'circle-radius': {
          stops: [[0, 0], [6, 5]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['==', 's', 1],
      id: 'settlements-1',
      paint: {
        'circle-color': '#EE5759',
        'circle-radius': {
          stops: [[0, 0], [5, 5]],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgba(255, 255, 255, 0.9)',
      },
      source: 'settlements',
      type: 'circle',
    },
    {
      filter: ['>=', 's', 6],
      id: 'settlements-text-6',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 12,
      },
      minzoom: 9,
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      filter: ['==', 's', 5],
      id: 'settlements-text-5',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 12,
      },
      minzoom: 8,
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      filter: ['==', 's', 4],
      id: 'settlements-text-4',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 12,
      },
      minzoom: 7,
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      filter: ['==', 's', 3],
      id: 'settlements-text-3',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 14,
      },
      minzoom: 7,
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      filter: ['==', 's', 2],
      id: 'settlements-text-2',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 14,
      },
      minzoom: 5,
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      filter: ['==', 's', 1],
      id: 'settlements-text-1',
      layout: {
        'text-anchor': 'bottom-left',
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light'],
        'text-size': 14,
      },
      paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'settlements',
      type: 'symbol',
    },
    {
      id: 'undArea-text',
      source: 'undArea',
      type: 'symbol',
      layout: {
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light-italic'],
        'text-line-height': 1,
        'text-max-width': 2,
        'text-size': 16,
      },
      minzoom: 6,
      maxzoom: 7,
      paint: {
        'text-color': 'black',
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'admin2-text',
      source: 'admin2',
      type: 'symbol',
      layout: {
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light-italic'],
        'text-line-height': 1,
        'text-max-width': 2,
        'text-size': 16,
      },
      minzoom: 6,
      maxzoom: 7,
      paint: {
        'text-color': 'black',
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'admin1-text',
      source: 'admin1',
      type: 'symbol',
      layout: {
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light-italic'],
        'text-line-height': 1,
        'text-max-width': 2,
        'text-size': 20,
      },
      minzoom: 5,
      maxzoom: 6,
      paint: {
        'text-color': 'black',
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'admin0-text',
      layout: {
        'text-field': '{n}',
        'text-font': ['roboto-condensed-light-italic'],
        'text-size': 22,
      },
      minzoom: 0,
      maxzoom: 5,
      paint: {
        'text-color': 'black',
        'text-halo-color': 'rgba(255, 255, 255, 0.9)',
        'text-halo-width': 1.5,
      },
      source: 'admin0',
      type: 'symbol',
    },
  ],
};

export default style;