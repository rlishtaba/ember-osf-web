import Engine from '@ember/engine';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Resolver from './resolver';

const { modulePrefix } = config;

const engine = Engine.extend({
    modulePrefix,
    Resolver,

    dependencies: {
        externalRoutes: [
            'home',
            'support',
        ],
        services: [
            'analytics',
            'current-user',
            'features',
            'head-data',
            'i18n',
            'osf-modal-state',
            'page-title-list',
            'session',
            'store',
            'theme',
            'toast',
            'router',
            'ready',
        ],
    },
});

loadInitializers(engine, modulePrefix);

export default engine;
