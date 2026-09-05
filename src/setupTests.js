// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// jsdom has no layout, so window.scrollTo is a stub that reports
// "Not implemented" through the virtual console — every route render printed a
// stack trace that had nothing to do with the test. The app's own guard cannot
// catch it, because jsdom logs rather than throws.
window.scrollTo = () => {};
