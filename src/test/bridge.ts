import type { ProdCanvasGameStates } from "../features/prod-canvas-game/prod-canvas-game.types";

export const TEST_BRIDGE_GLOBAL_NAME = "__SETFARM_TEST_BRIDGE__";
export const SCENARIO_MODE_GLOBAL_NAME = "__SETFARM_SCENARIO_MODE__";
export const SCENARIO_MODE_MANUAL = "manual";

export type BridgeStates = ProdCanvasGameStates;

export interface TestBridgeApi {
  readonly states: BridgeStates;
  invokeAction(actionRef: string): void;
}

export interface TestBridgeOptions {
  getStates: () => BridgeStates;
  invokeAction: (actionRef: string) => void;
}

function normalizeActionRef(actionRef: unknown): string {
  if (typeof actionRef === "string") return actionRef;
  if (actionRef && typeof actionRef === "object") {
    const candidate = (actionRef as { actionRef?: unknown; ref?: unknown; id?: unknown });
    if (typeof candidate.actionRef === "string") return candidate.actionRef;
    if (typeof candidate.ref === "string") return candidate.ref;
    if (typeof candidate.id === "string") return candidate.id;
  }
  return "";
}

/**
 * Installs the runtime evidence bridge:
 *  - `__SETFARM_TEST_BRIDGE__.states` exposes the live application states
 *    keyed by the canonical state references (JSON pointers `/states/<ref>`).
 *  - `__SETFARM_TEST_BRIDGE__.invokeAction(actionRef)` invokes a product action
 *    through the same code path as the rendered control.
 *  - `__SETFARM_SCENARIO_MODE__` selects the manual scenario mode.
 */
export function installTestBridge(options: TestBridgeOptions): () => void {
  if (typeof window === "undefined") return () => undefined;

  const bridge = {
    invokeAction: (actionRef: unknown): void => {
      options.invokeAction(normalizeActionRef(actionRef));
    },
  };

  Object.defineProperty(bridge, "states", {
    enumerable: true,
    get: () => options.getStates(),
  });

  const scope = window as unknown as Record<string, unknown>;
  scope[TEST_BRIDGE_GLOBAL_NAME] = bridge;
  scope[SCENARIO_MODE_GLOBAL_NAME] = SCENARIO_MODE_MANUAL;

  return () => {
    delete scope[TEST_BRIDGE_GLOBAL_NAME];
  };
}
