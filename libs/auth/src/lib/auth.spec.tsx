import { render } from '@testing-library/react';

import AuthWsAuth from './auth';

describe('AuthWsAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthWsAuth />);
    expect(baseElement).toBeTruthy();
  });
});
