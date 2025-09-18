export type BadgeId = 'nutrition-novice' | 'herbal-apprentice' | 'anemia-fighter';

export interface Badge {
  id: BadgeId;
  title: string;
  description: string;
  icon: string;
  requirement: string;
}

export interface BadgeProgress {
  nutritionNoviceCompleted: boolean;
  herbalAnswersCount: number;
  anemiaAnswersCount: number;
}