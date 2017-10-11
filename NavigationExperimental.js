/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationExperimental
 * @flow
 */
'use strict';

import NavigationCard from './NavigationExperimentalComponents/NavigationCard';
const NavigationCardStack = require('./NavigationExperimentalComponents/NavigationCardStack');
const NavigationHeader = require('./NavigationExperimentalComponents/NavigationHeader');
const NavigationPropTypes = require('./NavigationPropTypes');
const NavigationStateUtils = require('./NavigationStateUtils');
const NavigationTransitioner = require('./NavigationTransitioner');

const warning = require('fbjs/lib/warning');

const NavigationExperimental = {
  // Core
  StateUtils: NavigationStateUtils,

  // Views
  Transitioner: NavigationTransitioner,

  // CustomComponents:
  Card: NavigationCard,
  CardStack: NavigationCardStack,
  Header: NavigationHeader,

  PropTypes: NavigationPropTypes,
};

module.exports = NavigationExperimental;
