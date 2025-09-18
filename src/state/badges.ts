// src/state/badges.ts

export type BadgeId = "nutrition-novice" | "herbal-apprentice" | "anemia-fighter";

export interface BadgeProgress {
  nutritionNoviceCompleted: boolean;
  herbalAnswersCount: number;
  anemiaAnswersCount: number;
}

const STORAGE_KEY = "african-cuisine-badges";
const PROGRESS_KEY = "african-cuisine-badge-progress";

export const getUnlockedBadges = (): BadgeId[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const unlockBadge = (badgeId: BadgeId): boolean => {
  const current = getUnlockedBadges();
  if (current.includes(badgeId)) return false;
  const updated = [...current, badgeId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return true;
};

export const hasBadge = (badgeId: BadgeId): boolean => {
  return getUnlockedBadges().includes(badgeId);
};

export const getBadgeProgress = (): BadgeProgress => {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored
      ? JSON.parse(stored)
      : { nutritionNoviceCompleted: false, herbalAnswersCount: 0, anemiaAnswersCount: 0 };
  } catch {
    return { nutritionNoviceCompleted: false, herbalAnswersCount: 0, anemiaAnswersCount: 0 };
  }
};

export const updateBadgeProgress = (progress: Partial<BadgeProgress>): void => {
  const current = getBadgeProgress();
  const updated = { ...current, ...progress };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
};

export const markFirstQuizDone = (): void => {
  updateBadgeProgress({ nutritionNoviceCompleted: true });
};

//  ajoute ici les fonctions manquantes
export const incrementHerbal = (): void => {
  const progress = getBadgeProgress();
  updateBadgeProgress({
    herbalAnswersCount: progress.herbalAnswersCount + 1,
  });
};

export const incrementAnemia = (): void => {
  const progress = getBadgeProgress();
  updateBadgeProgress({
    anemiaAnswersCount: progress.anemiaAnswersCount + 1,
  });
};

export const checkAndUnlockBadges = (): BadgeId[] => {
  const progress = getBadgeProgress();
  const newlyUnlocked: BadgeId[] = [];

  if (progress.nutritionNoviceCompleted && !hasBadge("nutrition-novice")) {
    if (unlockBadge("nutrition-novice")) newlyUnlocked.push("nutrition-novice");
  }
  if (progress.herbalAnswersCount >= 3 && !hasBadge("herbal-apprentice")) {
    if (unlockBadge("herbal-apprentice")) newlyUnlocked.push("herbal-apprentice");
  }
  if (progress.anemiaAnswersCount >= 1 && !hasBadge("anemia-fighter")) {
    if (unlockBadge("anemia-fighter")) newlyUnlocked.push("anemia-fighter");
  }

  return newlyUnlocked;
};
