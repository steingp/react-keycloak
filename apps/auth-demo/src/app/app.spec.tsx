import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { describe, it } from 'vitest';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );
    expect(
      getAllByText(new RegExp('Welcome @auth-ws/auth-demo', 'gi')).length > 0
    ).toBeTruthy();
  });
});
function expect(baseElement: any) {
  throw new Error('Function not implemented.');
}

