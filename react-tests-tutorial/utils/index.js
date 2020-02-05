export const findByDataTestAttr = (component, attr) =>
    component.find(`[data-test='${attr}']`);
    