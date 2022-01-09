import React, { ComponentType } from "react";

export const mfe = async () => {
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default');
  const container = window.someContainer; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get(module);
}

export const dynamicFederation = async (scope: string, module: any) => {
  await __webpack_init_sharing__('default');
  const container = window[scope]; // or get the container somewhere else
  console.log(window.users)
  // Initialize the container, it may provide shared modules
  const res = await container.init(__webpack_share_scopes__.default);
  console.log(res)
  return container.get(module).then((factory) => {
    const Module = factory();
    console.log(Module)
    return Module;
  });
};

export function importFederatedModule<T extends ComponentType<any>>(name: string, federatedModule: any) {
  return React.lazy<T>(() => dynamicFederation(name, federatedModule));
}