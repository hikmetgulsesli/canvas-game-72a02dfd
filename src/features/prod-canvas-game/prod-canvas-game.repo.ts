import {
  HIGH_SCORE_STORAGE_KEY,
  type HighScoreRecord,
} from "./prod-canvas-game.types";

export interface HighScoreRepository {
  read(): number | null;
  write(value: number): void;
}

function defaultStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage ?? null;
  } catch {
    return null;
  }
}

function parseStoredValue(raw: string | null): number | null {
  if (raw === null) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === "number") {
      return Number.isFinite(parsed) ? parsed : null;
    }
    if (parsed && typeof parsed === "object" && "value" in (parsed as Record<string, unknown>)) {
      const value = (parsed as Record<string, unknown>).value;
      if (typeof value === "number" && Number.isFinite(value)) return value;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Browser-origin persistence for PERSIST_HIGH_SCORE_STORAGE.
 * Durability is `reload`, so the value is rehydrated on application start.
 */
export function createHighScoreRepository(
  storage: Storage | null = defaultStorage(),
): HighScoreRepository {
  return {
    read(): number | null {
      if (!storage) return null;
      try {
        return parseStoredValue(storage.getItem(HIGH_SCORE_STORAGE_KEY));
      } catch {
        return null;
      }
    },
    write(value: number): void {
      if (!storage) return;
      try {
        const record: HighScoreRecord = { value };
        storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(record));
      } catch {
        /* persistence is best effort; the in-memory state stays authoritative */
      }
    },
  };
}
