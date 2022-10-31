export interface ICandidato {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  curriculo: string;
  user: User;
  category: string;
}

export interface User {
  id: number;
  email: string;
  senha: string;
  enabled: boolean;
  username: string;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  password: string;
}

export interface Authority {
  id: number;
  nome: string;
  authority: string;
}
