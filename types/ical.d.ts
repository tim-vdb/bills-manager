export type IcalEvent = {
    summary: string;
    description: string;
    location: string;
    start: string;  // ou Date, si tu veux vraiment un objet Date
    end: string;    // ou Date
    totalHours: number;
};

export type IcalData = {
    name: string;
    description: string;
    events: IcalEvent[];
};