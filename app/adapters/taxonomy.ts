import OsfAdapter from './osf-adapter';

export default class Taxonomy extends OsfAdapter {
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data' {
    interface AdapterRegistry {
        'taxonomy': Taxonomy;
    }
}
