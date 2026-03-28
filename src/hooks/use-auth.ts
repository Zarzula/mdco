import { useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
  plan: "free" | "premium";
  points: number;
  level: string;
  joinedDate: string;
  capsulasLeidas: number;
  debatesParticipados: number;
}

const STORAGE_KEY = "mdco_user";

function getLevel(points: number): string {
  if (points >= 15000) return "Maestro";
  if (points >= 5001) return "Experto";
  if (points >= 1501) return "Avanzado";
  if (points >= 501) return "Intermedio";
  if (points >= 101) return "Aficionado";
  return "Novato";
}

function loadUser(): User | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}

function saveUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(loadUser);

  useEffect(() => {
    if (user) {
      saveUser(user);
    }
  }, [user]);

  const register = (name: string, email: string) => {
    const newUser: User = {
      name,
      email,
      plan: "free",
      points: 10,
      level: "Novato",
      joinedDate: new Date().toISOString(),
      capsulasLeidas: 0,
      debatesParticipados: 0,
    };
    setUser(newUser);
    return newUser;
  };

  const login = (email: string) => {
    const existing = loadUser();
    if (existing && existing.email === email) {
      setUser(existing);
      return existing;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const addPoints = (amount: number) => {
    if (!user) return;
    const newPoints = user.points + amount;
    setUser({ ...user, points: newPoints, level: getLevel(newPoints) });
  };

  const incrementStat = (stat: "capsulasLeidas" | "debatesParticipados") => {
    if (!user) return;
    setUser({ ...user, [stat]: user[stat] + 1 });
  };

  return { user, register, login, logout, addPoints, incrementStat, isLoggedIn: !!user };
}
