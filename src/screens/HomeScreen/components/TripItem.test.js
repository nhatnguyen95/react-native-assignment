import 'react-native';
import React from 'react';
import TripItem from './TripItem';

import renderer from 'react-test-renderer';

describe('TripItem', () => {
  describe('Rendering', () => {
      it('should match to snapshot', () => {
        const component = renderer.create(
          <TripItem />
        ).toJSON();
        expect(component).toMatchSnapshot()
      });
  });
});