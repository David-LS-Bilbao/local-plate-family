import { describe, expect, it } from "vitest";
import {
  DEFAULT_CONFIG,
  MenuConfig,
  generateMenu,
} from "@/lib/menuGenerator";
import type { FamilyMember } from "@/lib/storage";

const makeConfig = (overrides: Partial<MenuConfig> = {}): MenuConfig => ({
  ...DEFAULT_CONFIG,
  ...overrides,
});

const makeMember = (
  overrides: Partial<FamilyMember> = {},
): FamilyMember => ({
  id: "member-1",
  name: "Ane",
  role: "Adulto/a",
  ration: "media",
  preferences: "",
  allergens: [],
  intolerances: [],
  conditions: [],
  diets: [],
  ...overrides,
});

const allDishes = (plan: ReturnType<typeof generateMenu>) =>
  plan.flatMap((day) => day.slots.map((slot) => slot.dish));

describe("generateMenu", () => {
  it("returns the configured number of days", () => {
    const plan = generateMenu([], makeConfig({ days: 3 }));

    expect(plan).toHaveLength(3);
  });

  it("clamps the number of days between 1 and 7", () => {
    expect(generateMenu([], makeConfig({ days: 0 }))).toHaveLength(1);
    expect(generateMenu([], makeConfig({ days: 8 }))).toHaveLength(7);
  });

  it("generates a menu with the default configuration when there is no family", () => {
    const plan = generateMenu([], DEFAULT_CONFIG);

    expect(plan).toHaveLength(DEFAULT_CONFIG.days);
    expect(plan[0].slots.map((slot) => slot.meal)).toEqual(
      DEFAULT_CONFIG.mealsPerDay,
    );
  });

  it('returns gluten-free dishes for gluten allergy when alternatives exist', () => {
    const family = [makeMember({ allergens: ["Gluten"] })];
    const dishes = allDishes(generateMenu(family, DEFAULT_CONFIG));

    expect(dishes.length).toBeGreaterThan(0);
    expect(dishes.every((dish) => dish.tags.includes("sin gluten"))).toBe(
      true,
    );
  });

  it('returns vegan dishes for a vegan family member when alternatives exist', () => {
    const family = [makeMember({ diets: ["Vegana"] })];
    const dishes = allDishes(generateMenu(family, DEFAULT_CONFIG));

    expect(dishes.length).toBeGreaterThan(0);
    expect(dishes.every((dish) => dish.tags.includes("vegana"))).toBe(true);
  });

  it("does not return dishes over 60 km when strict km 0 alternatives exist", () => {
    const dishes = allDishes(
      generateMenu([], makeConfig({ km0Strict: true })),
    );

    expect(dishes.length).toBeGreaterThan(0);
    expect(dishes.every((dish) => dish.km <= 60)).toBe(true);
  });

  it('does not return dishes over 25 minutes for "rápido" cooking time when alternatives exist', () => {
    const dishes = allDishes(
      generateMenu([], makeConfig({ cookingTime: "rápido" })),
    );

    expect(dishes.length).toBeGreaterThan(0);
    expect(dishes.every((dish) => dish.cookMinutes <= 25)).toBe(true);
  });
});
