/**
 * Shared types for the Canvas Game product surface (US-001 / ACT_START_GAME).
 *
 * The identifiers below are the canonical Setfarm identity values from the
 * ProductSpecV2 contract and must not be renamed.
 */

export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_game.high_score_storage.v1";

export const STATE_APP_STATE_ID = "STATE_APP_STATE";
export const STATE_HIGH_SCORE_ID = "STATE_HIGH_SCORE";

export const ENTITY_HIGH_SCORE_ID = "ENTITY_HIGH_SCORE";
export const FIELD_HIGH_SCORE_VALUE_ID = "FIELD_HIGH_SCORE_VALUE";

export const ACTION_START_GAME_ID = "ACT_START_GAME";
export const CONTROL_SLOT_START_GAME_START_BUTTON_ID = "CSLOT_START_GAME_START_BUTTON";

export const SURF_PLAY_PAGE_ID = "SURF_PLAY_PAGE";
export const SURF_GAME_CANVAS_ID = "SURF_GAME_CANVAS";
export const ROUTE_PLAY_ROUTE_ID = "ROUTE_PLAY_ROUTE";

export type AppStatus = "idle" | "playing";

export interface AppState {
  status: AppStatus;
}

export interface HighScoreState {
  value: number | null;
}

/**
 * Canonical state bag keyed by the contract state references. The runtime
 * evidence capture addresses these entries through the JSON pointers
 * `/states/STATE_APP_STATE` and `/states/STATE_HIGH_SCORE`.
 */
export interface ProdCanvasGameStates {
  STATE_APP_STATE: AppState;
  STATE_HIGH_SCORE: HighScoreState;
}

export interface HighScoreRecord {
  value: number;
}
