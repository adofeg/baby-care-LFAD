export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: 'Mother' | 'Father';
}

export interface Child {
  id: string;
  userId: string;
  name: string;
  birthDate: string;
  gender: 'Male' | 'Female' | 'Other';
  birthWeight: number;
  birthSize: number;
  extraInfo?: string;
}

export interface FeedingRecord {
  id: string;
  childId: string;
  date: string;
  time: string;
  ounces: number;
  milkType: 'breast' | 'formula';
  feedingMethod: 'breast' | 'bottle';
}

export interface DiaperRecord {
  id: string;
  childId: string;
  date: string;
  time: string;
  loadLevel: 1 | 2 | 3 | 4 | 5;
  excretaType: 'urine' | 'stool' | 'both';
  overflow: boolean;
  changedClothes: boolean;
}

export interface SleepRecord {
  id: string;
  childId: string;
  date: string;
  startTime: string;
  endTime: string;
  quality: 1 | 2 | 3 | 4 | 5;
}

export interface BathingRecord {
  id: string;
  childId: string;
  date: string;
  time: string;
  location: string;
  cleaningType: 'full bath' | 'specific cleaning';
  personInCharge: string;
  comments?: string;
}