import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import Features from 'ember-feature-flags/services/features';
import config from 'ember-get-config';
import Session from 'ember-simple-auth/services/session';

import Analytics from 'ember-osf-web/services/analytics';

const { featureFlagNames: { ABTesting } } = config;

export default class Home extends Route {
  @service analytics!: Analytics;
  @service session!: Session;
  @service features!: Features;

  async beforeModel(transition: Transition) {
      await super.beforeModel(transition);

      if (this.session.isAuthenticated) {
          this.transitionTo('dashboard');
      }
  }

  @action
  didTransition() {
      const shouldShowVersionB = this.features.isEnabled(ABTesting.homePageVersionB);
      const version = shouldShowVersionB ? 'versionB' : 'versionA';
      this.analytics.trackPage(undefined, undefined, undefined, version);
  }
}
