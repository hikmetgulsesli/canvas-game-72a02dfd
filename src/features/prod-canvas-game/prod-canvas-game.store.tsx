import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { createHighScoreRepository } from "./prod-canvas-game.repo";
import {
  ACTION_START_GAME_ID,
  type ProdCanvasGameStates,
} from "./prod-canvas-game.types";
import { applyStartGame } from "../surf-play-page/act_start_game";
import { createInitialStates } from "../../game/game-runtime";
import { installTestBridge } from "../../test/bridge";

export interface ProdCanvasGameStore {
  states: ProdCanvasGameStates;
  invokeAction: (actionRef: string) => void;
}

const ProdCanvasGameStoreContext = createContext<ProdCanvasGameStore | null>(null);

/**
 * Application state container for the Canvas Game product surface.
 *
 * It owns STATE_APP_STATE and STATE_HIGH_SCORE, applies the ACT_START_GAME
 * state deltas, persists the high score through the browser-origin
 * repository and exposes the runtime evidence bridge.
 */
export function ProdCanvasGameStoreProvider({ children }: { children: React.ReactNode }) {
  const repository = useMemo(() => createHighScoreRepository(), []);
  const [states, setStates] = useState<ProdCanvasGameStates>(() =>
    createInitialStates(repository),
  );

  const statesRef = useRef(states);
  statesRef.current = states;

  const invokeAction = useCallback(
    (actionRef: string) => {
      if (actionRef !== ACTION_START_GAME_ID) return;
      setStates(() => {
        const outcome = applyStartGame(repository);
        const next: ProdCanvasGameStates = {
          STATE_APP_STATE: outcome.appState,
          STATE_HIGH_SCORE: outcome.highScore,
        };
        statesRef.current = next;
        return next;
      });
    },
    [repository],
  );

  useEffect(
    () => installTestBridge({ getStates: () => statesRef.current, invokeAction }),
    [invokeAction],
  );

  const value = useMemo<ProdCanvasGameStore>(
    () => ({ states, invokeAction }),
    [states, invokeAction],
  );

  return (
    <ProdCanvasGameStoreContext.Provider value={value}>
      {children}
    </ProdCanvasGameStoreContext.Provider>
  );
}

export function useProdCanvasGameStore(): ProdCanvasGameStore {
  const store = useContext(ProdCanvasGameStoreContext);
  if (!store) {
    throw new Error("PROD_CANVAS_GAME_STORE_MISSING");
  }
  return store;
}
