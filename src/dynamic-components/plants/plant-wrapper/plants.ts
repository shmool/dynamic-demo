export const plantsConfig = [
  {
    componentName: 'leaf',
    component: async () => (await import('src/dynamic-components/plants/leaf/plant.component')).PlantComponent,
    inputs: {
      name: 'leaf'
    }
  },{
    componentName: 'tree',
    component: async () => (await import('src/dynamic-components/plants/tree/plant.component')).PlantComponent,
    inputs: {
      name: 'tree'
    }
  },{
    componentName: 'grass',
    component: async () => (await import('src/dynamic-components/plants/grass/plant.component')).PlantComponent,
    inputs: {
      name: 'grass'
    }
  }
];
