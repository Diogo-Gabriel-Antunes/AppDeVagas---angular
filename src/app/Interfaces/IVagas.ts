export interface IVagas {
  id: number;
  jobTitle: string;
  jobDescription: string;
  vacancyLocation: string;
  salaryRange: number;
  salaryRangeMax: number;
  seniority: string;
  typeOfContract: string;
  category: string;
  active: boolean;
  activities: any;
  technologiesRequired: ITechnologiesRequired[];
  benefits: IBenefit[];
  technologiesDesirable: ITechnologiesDesirable[];
  company: ICompany;
}

export interface ITechnologiesRequired {
  id: number;
  technologies: string;
  category: string;
}

export interface IBenefit {
  id: number;
  benefits: string;
}

export interface ITechnologiesDesirable {
  id: number;
  technologies: string;
  category: string;
}

export interface ICompany {
  id: number;
  companyName: string;
  numberEmployees: number;
  adress: string;
  corporateEmail: string;
  managerRH: string;
  companyDescription: string;
  cnpj: string;
}
