import test from "node:test";
import assert from "node:assert/strict";
import { experiences } from "../src/data/experiences.ts";
import { filterExperiences } from "../src/lib/filter-experiences.ts";
const empty = { search: "", category: "", destination: "" };
test("100 unique complete experiences covering the five categories", () => {
  assert.equal(experiences.length, 100);
  assert.equal(new Set(experiences.map((x) => x.id)).size, 100);
  assert.equal(new Set(experiences.map((x) => x.title)).size, 100);
  for (const category of ["Adventure", "Culture", "Food", "Wellness", "Nature"])
    assert.equal(experiences.filter((x) => x.category === category).length, 20);
  for (const item of experiences) {
    assert.ok(item.destination.includes(", "));
    assert.ok(item.description && item.imageUrl && item.highlights.length);
    assert.ok(item.price > 0 && item.rating >= 0 && item.rating <= 5);
  }
});
test("no filters returns all items", () =>
  assert.equal(filterExperiences(experiences, empty).length, 100));
test("case-insensitive title search", () =>
  assert.deepEqual(
    filterExperiences(experiences, { ...empty, search: "SAILING" }).map(
      (x) => x.id,
    ),
    ["exp-001", "exp-056"],
  ));
test("category works independently, including lowercase shared URLs", () =>
  assert.equal(
    filterExperiences(experiences, { ...empty, category: "adventure" }).length,
    20,
  ));
test("destination works independently for country and city", () => {
  assert.equal(
    filterExperiences(experiences, { ...empty, destination: "Portugal" })
      .length,
    10,
  );
  assert.equal(
    filterExperiences(experiences, { ...empty, destination: "Kyoto" }).length,
    5,
  );
});
test("all filters combine with AND semantics", () =>
  assert.deepEqual(
    filterExperiences(experiences, {
      search: "sailing",
      category: "adventure",
      destination: "Croatia",
    }).map((x) => x.id),
    ["exp-001"],
  ));
test("contradictory filters and unknown values return no matches", () => {
  assert.equal(
    filterExperiences(experiences, {
      search: "sailing",
      category: "Food",
      destination: "Croatia",
    }).length,
    0,
  );
  assert.equal(
    filterExperiences(experiences, { ...empty, category: "unknown" }).length,
    0,
  );
});
test("regex punctuation is treated literally without crashes or wildcard matches", () => {
  for (const search of ["[", "(", ".*", "\\", "a+b", "?", "${", "(a+)+$"])
    assert.deepEqual(filterExperiences(experiences, { ...empty, search }), []);
});
test("surrounding whitespace is ignored", () =>
  assert.deepEqual(
    filterExperiences(experiences, { ...empty, search: "  sailing  " }),
    filterExperiences(experiences, { ...empty, search: "sailing" }),
  ));
