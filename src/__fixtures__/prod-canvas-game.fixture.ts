import {
  ENTITY_HIGH_SCORE_ID,
  FIELD_HIGH_SCORE_VALUE_ID,
  STATE_APP_STATE_ID,
  STATE_HIGH_SCORE_ID,
  type AppState,
  type HighScoreState,
  type ProdCanvasGameStates,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export const PROD_CANVAS_GAME_FIXTURE_ENTITY_ID = ENTITY_HIGH_SCORE_ID;
export const PROD_CANVAS_GAME_FIXTURE_FIELD_ID = FIELD_HIGH_SCORE_VALUE_ID;
export const PROD_CANVAS_GAME_FIXTURE_STATE_REFS = [
  STATE_APP_STATE_ID,
  STATE_HIGH_SCORE_ID,
] as const;

export interface ProdCanvasGameFixture {
  appState: AppState;
  highScore: HighScoreState;
  states: ProdCanvasGameStates;
}

/**
 * Deterministic fixture used by local verification of the ACT_START_GAME
 * contract. It mirrors the canonical initial values of the product spec.
 */
export function createProdCanvasGameFixture(
  overrides: Partial<ProdCanvasGameFixture> = {},
): ProdCanvasGameFixture {
  const appState: AppState = overrides.appState ?? { status: "idle" };
  const highScore: HighScoreState = overrides.highScore ?? { value: null };
  const states: ProdCanvasGameStates =
    overrides.states ?? { STATE_APP_STATE: appState, STATE_HIGH_SCORE: highScore };

  return { appState, highScore, states };
}

export const prodCanvasGameFixture = createProdCanvasGameFixture();
