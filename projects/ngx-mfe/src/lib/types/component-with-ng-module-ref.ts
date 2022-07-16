import { Type, NgModuleRef } from "@angular/core";

export type ComponentWithNgModuleRef<TComponent = unknown, TModule = unknown> = {
  component: Type<TComponent>;
  ngModuleRef: NgModuleRef<TModule>;
}