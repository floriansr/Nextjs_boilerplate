/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule: import('jest-styled-components').jest.Matchers<R>['toHaveStyleRule'];
  }
}
