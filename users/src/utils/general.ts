import React, { ComponentType } from "react";

const dynamicFederation = async (scope: string, module: any) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  return container.get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};

export function importFederatedModule<T extends ComponentType<any>>(name: string, federatedModule: any) {
  return React.lazy<T>(() => dynamicFederation(name, federatedModule));
}
