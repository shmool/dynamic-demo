export const propsConfig = [
  {
    componentName: 'dino-egg',
    component: async () => (await import('src/dynamic-components/props/dino-egg/prop.component')).PropComponent,
    inputs: {
      name: 'dino-egg'
    }
  },{
    componentName: 'volcano',
    component: async () => (await import('src/dynamic-components/props/volcano/prop.component')).PropComponent,
    inputs: {
      name: 'volcano'
    }
  },{
    componentName: 'bone',
    component: async () => (await import('src/dynamic-components/props/bone/prop.component')).PropComponent,
    inputs: {
      name: 'bone'
    }
  },
];
