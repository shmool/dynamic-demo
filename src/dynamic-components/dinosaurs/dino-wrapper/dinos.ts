export const itemsConfig = [
  {
    componentName: 'dino1',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino1/dino.component')).DinoComponent,
    inputs: {
      name: 'ShmuelaSaurus'
    }
  },
  {
    componentName: 'dino2',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino2/dino.component')).DinoComponent,
    inputs: {
      name: 'NadaviSaurus'
    }
  },
  {
    componentName: 'dino3',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino3/dino.component')).DinoComponent,
    inputs: {
      name: 'NadaviSaurus'
    }
  },
  {
    componentName: 'dino4',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino4/dino.component')).DinoComponent,
    inputs: {
      name: 'NadaviSaurus'
    }
  },
  {
    componentName: 'dino5',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino5/dino.component')).DinoComponent,
    inputs: {
      name: 'NadaviSaurus'
    }
  },
  {
    componentName: 'dino6',
    component: async () => (await import('src/dynamic-components/dinosaurs/dino6/dino.component')).DinoComponent,
    inputs: {
      name: 'NadaviSaurus'
    }
  }
];
