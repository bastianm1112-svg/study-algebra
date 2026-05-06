export const unit3 = {
  id: 3,
  title: "Inequalities",
  emoji: "📊",
  color: "#43c6ac",
  topics: [
    {
      id: "one-step-inequalities",
      title: "One-Step Inequalities",
      flashcards: [
        {
          front: "What do the inequality symbols mean?",
          back: "< means 'less than', > means 'greater than', ≤ means 'less than or equal to', ≥ means 'greater than or equal to'. Example: x > 3 means x can be 4, 5, 100, or any number greater than 3."
        },
        {
          front: "What is the difference between an open and a closed circle on a number line?",
          back: "Open circle (○): the endpoint is NOT included, used with < or >. Closed circle (●): the endpoint IS included, used with ≤ or ≥. Example: x > 3 has an open circle at 3; x ≥ 3 has a closed circle at 3."
        },
        {
          front: "Which direction do you shade on a number line?",
          back: "Shade in the direction of the solutions. For x > 3, shade to the RIGHT of 3 (larger numbers). For x < 3, shade to the LEFT (smaller numbers). The arrow continues to infinity."
        },
        {
          front: "What is the critical rule for multiplying or dividing by a negative?",
          back: "When you multiply or divide BOTH sides of an inequality by a NEGATIVE number, you MUST FLIP the inequality symbol. Example: -2x > 8 → divide by -2 → x < -4 (the > flips to <). This is the most important inequality rule."
        },
        {
          front: "What is the solution set of an inequality?",
          back: "The set of all values that make the inequality true. We often write it as: a set {x | x > 3} (read 'the set of x such that x > 3'), an inequality x > 3, or in interval notation (3, ∞)."
        },
        {
          front: "What is interval notation?",
          back: "A way to write a range of values: use ( ) for open endpoints (not included) and [ ] for closed endpoints (included). Example: x > 3 → (3, ∞); x ≤ 5 → (-∞, 5]; -2 < x ≤ 7 → (-2, 7]. Infinity always uses ( )."
        },
        {
          front: "How do you check a solution to an inequality?",
          back: "Pick any number in the proposed solution set and substitute into the original inequality. If it makes the inequality true, your solution is likely correct. Example: for x > 3, test x = 5: is 5 > 3? Yes ✓. Also test a number outside: x = 1, is 1 > 3? No ✓."
        }
      ],
      problems: [
        {
          id: "osi-1",
          type: "multiple-choice",
          question: "Solve: x + 3 > 7",
          choices: ["x > 4", "x > 10", "x < 4", "x > -4"],
          answer: "x > 4",
          explanation: {
            steps: [
              "Subtract 3 from both sides: x + 3 - 3 > 7 - 3",
              "Simplify: x > 4",
              "Check with x = 5: 5 + 3 = 8 > 7 ✓",
              "Graph: open circle at 4, shade right"
            ],
            tip: "Solving inequalities uses the same steps as equations, unless you multiply/divide by a negative."
          }
        },
        {
          id: "osi-2",
          type: "multiple-choice",
          question: "Solve: n - 4 ≤ 2",
          choices: ["n ≤ 6", "n ≤ -2", "n ≥ 6", "n < 6"],
          answer: "n ≤ 6",
          explanation: {
            steps: [
              "Add 4 to both sides: n ≤ 2 + 4",
              "Simplify: n ≤ 6",
              "Check with n = 5: 5 - 4 = 1 ≤ 2 ✓",
              "Graph: closed circle at 6, shade left"
            ],
            tip: "≤ means the endpoint IS included — use a closed circle."
          }
        },
        {
          id: "osi-3",
          type: "multiple-choice",
          question: "Solve: 3x < 15",
          choices: ["x < 5", "x < 45", "x > 5", "x ≤ 5"],
          answer: "x < 5",
          explanation: {
            steps: [
              "Divide both sides by 3 (positive — no flip): x < 15/3",
              "Simplify: x < 5",
              "Check with x = 4: 3(4) = 12 < 15 ✓",
              "Graph: open circle at 5, shade left"
            ],
            tip: "Dividing by a positive number does NOT flip the inequality."
          }
        },
        {
          id: "osi-4",
          type: "multiple-choice",
          question: "Solve: -2x > 8",
          choices: ["x < -4", "x > -4", "x < 4", "x > 4"],
          answer: "x < -4",
          explanation: {
            steps: [
              "Divide both sides by -2 — FLIP the inequality!",
              "-2x ÷ (-2) < 8 ÷ (-2)",
              "x < -4",
              "Check with x = -5: -2(-5) = 10 > 8 ✓"
            ],
            tip: "Dividing by a NEGATIVE flips the inequality. This is the most common error!"
          }
        },
        {
          id: "osi-5",
          type: "multiple-choice",
          question: "Solve: x/2 ≥ 4",
          choices: ["x ≥ 8", "x ≥ 2", "x ≤ 8", "x ≥ 6"],
          answer: "x ≥ 8",
          explanation: {
            steps: [
              "Multiply both sides by 2 (positive — no flip): x ≥ 4 × 2",
              "Simplify: x ≥ 8",
              "Check with x = 8: 8/2 = 4 ≥ 4 ✓ (boundary included)",
              "Graph: closed circle at 8, shade right"
            ],
            tip: "Multiplying by a positive number does not change the inequality direction."
          }
        },
        {
          id: "osi-6",
          type: "multiple-choice",
          question: "Which graph represents x < -2?",
          choices: ["Open circle at -2, shaded left", "Closed circle at -2, shaded left", "Open circle at -2, shaded right", "Closed circle at -2, shaded right"],
          answer: "Open circle at -2, shaded left",
          explanation: {
            steps: [
              "x < -2 means x is strictly less than -2 (not equal)",
              "Strict inequality (<) → open circle at -2",
              "Less than → shade to the left (toward -∞)"
            ],
            tip: "< and > use open circles; ≤ and ≥ use closed circles."
          }
        },
        {
          id: "osi-7",
          type: "fill-in",
          question: "Solve: -x/3 < 5. Write your answer as an inequality.",
          answer: "x > -15",
          explanation: {
            steps: [
              "Multiply both sides by -3 — FLIP the inequality!",
              "(-x/3)(-3) > 5(-3)",
              "x > -15",
              "Check with x = 0: -0/3 = 0 < 5 ✓"
            ],
            tip: "Multiplying by a negative always flips the inequality — even when clearing a fraction."
          }
        },
        {
          id: "osi-8",
          type: "fill-in",
          question: "Solve: 7 + x ≥ 3",
          answer: "x ≥ -4",
          explanation: {
            steps: [
              "Subtract 7 from both sides: x ≥ 3 - 7",
              "x ≥ -4",
              "Check with x = -4: 7 + (-4) = 3 ≥ 3 ✓"
            ],
            tip: "Treat it exactly like an equation, then keep (or flip) the inequality."
          }
        },
        {
          id: "osi-9",
          type: "fill-in",
          question: "Write the inequality shown: open circle at 5, shaded to the right.",
          answer: "x > 5",
          explanation: {
            steps: [
              "Open circle means the endpoint is NOT included → use < or >",
              "Shading to the right means values greater than 5",
              "Combine: x > 5"
            ],
            tip: "Open circle + right shade = greater than (strictly)."
          }
        },
        {
          id: "osi-10",
          type: "fill-in",
          question: "Solve: -5n ≤ -20",
          answer: "n ≥ 4",
          explanation: {
            steps: [
              "Divide both sides by -5 — FLIP the inequality!",
              "-5n ÷ (-5) ≥ -20 ÷ (-5)",
              "n ≥ 4",
              "Check with n = 4: -5(4) = -20 ≤ -20 ✓ (closed boundary)"
            ],
            tip: "Dividing by negative five flips ≤ to ≥."
          }
        }
      ],
      guide: {
        concept: "Inequalities are solved just like equations, with one critical exception: multiplying or dividing both sides by a negative number reverses the inequality symbol. The solution is a range of values, shown on a number line or written in interval notation.",
        examples: [
          {
            problem: "Solve: -2x > 8",
            steps: ["Divide both sides by -2 — flip the symbol!", "x < 8 ÷ (-2)", "x < -4", "Graph: open circle at -4, shade left"],
            answer: "x < -4"
          }
        ],
        tips: [
          "ALWAYS flip the inequality when multiplying or dividing by a negative number.",
          "Open circle for < and >; closed circle for ≤ and ≥.",
          "Shade toward the solutions: > and ≥ shade right; < and ≤ shade left."
        ],
        commonMistakes: [
          "Forgetting to flip the inequality when dividing by a negative: -2x > 8 → x > -4 is WRONG; correct is x < -4.",
          "Using a closed circle for strict inequalities (< or >).",
          "Shading in the wrong direction."
        ]
      }
    },
    {
      id: "multi-step-inequalities",
      title: "Multi-Step Inequalities",
      flashcards: [
        {
          front: "How do you solve a multi-step inequality?",
          back: "Use the same steps as multi-step equations: 1) Distribute. 2) Combine like terms. 3) Move variable terms to one side. 4) Move constants to the other. 5) Divide by the coefficient — flipping if negative. Graph the solution."
        },
        {
          front: "When must you flip the inequality sign in multi-step problems?",
          back: "Only when you multiply or divide BOTH sides by a negative number. Adding or subtracting negative numbers does NOT flip the sign. Example: -2x + 6 < 2 → -2x < -4 → x > 2 (flip when dividing by -2)."
        },
        {
          front: "How do you solve 2x + 3 > 11?",
          back: "Subtract 3 from both sides: 2x > 8. Divide both sides by 2 (positive — no flip): x > 4. Check: x = 5 → 2(5) + 3 = 13 > 11 ✓. Graph: open circle at 4, shade right."
        },
        {
          front: "How do you solve 4(x - 2) ≥ 8?",
          back: "Distribute: 4x - 8 ≥ 8. Add 8: 4x ≥ 16. Divide by 4: x ≥ 4. Or shortcut: divide both sides by 4 first (4 is positive, no flip): x - 2 ≥ 2, then add 2: x ≥ 4."
        },
        {
          front: "How do you graph the solution to a multi-step inequality?",
          back: "1) Solve for the variable. 2) Draw a number line. 3) Place open (strict) or closed (inclusive) circle at the boundary value. 4) Shade in the direction of the solutions. 5) Add an arrow showing the solution continues to infinity."
        },
        {
          front: "How do you check the solution to an inequality?",
          back: "Pick a 'test point' inside the solution set and substitute into the original inequality. If it's true, the solution is correct. Also test a point outside — it should make the inequality false. Example: x > 4; test x = 6 (in): 2(6)+3=15>11 ✓; test x = 0 (out): 3 > 11 ✗."
        },
        {
          front: "What happens when you distribute a negative in an inequality?",
          back: "Distributing a negative changes signs of terms inside the parentheses, but does NOT flip the inequality yet. You only flip when dividing/multiplying both SIDES by a negative. Example: -(x + 3) > 5 → -x - 3 > 5 → -x > 8 → x < -8 (flip when dividing by -1)."
        }
      ],
      problems: [
        {
          id: "msi-1",
          type: "multiple-choice",
          question: "Solve: 2x + 3 > 11",
          choices: ["x > 4", "x > 7", "x < 4", "x > 8"],
          answer: "x > 4",
          explanation: {
            steps: [
              "Subtract 3: 2x > 8",
              "Divide by 2 (positive — no flip): x > 4",
              "Check x = 5: 2(5)+3 = 13 > 11 ✓"
            ],
            tip: "Dividing by a positive 2 does not change the inequality direction."
          }
        },
        {
          id: "msi-2",
          type: "multiple-choice",
          question: "Solve: 3x - 5 ≤ 10",
          choices: ["x ≤ 5", "x ≤ 15", "x ≥ 5", "x < 5"],
          answer: "x ≤ 5",
          explanation: {
            steps: [
              "Add 5: 3x ≤ 15",
              "Divide by 3: x ≤ 5",
              "Check x = 5: 3(5)-5 = 10 ≤ 10 ✓ (boundary included)"
            ],
            tip: "The ≤ symbol stays the same when dividing by a positive number."
          }
        },
        {
          id: "msi-3",
          type: "multiple-choice",
          question: "Solve: 4(x - 2) ≥ 8",
          choices: ["x ≥ 4", "x ≥ 6", "x ≥ 0", "x ≤ 4"],
          answer: "x ≥ 4",
          explanation: {
            steps: [
              "Distribute: 4x - 8 ≥ 8",
              "Add 8: 4x ≥ 16",
              "Divide by 4: x ≥ 4",
              "Check x = 4: 4(4-2) = 8 ≥ 8 ✓"
            ],
            tip: "Distribute first, then solve like a two-step inequality."
          }
        },
        {
          id: "msi-4",
          type: "multiple-choice",
          question: "Solve: -2x + 6 < 2",
          choices: ["x > 2", "x < 2", "x > -2", "x < -2"],
          answer: "x > 2",
          explanation: {
            steps: [
              "Subtract 6: -2x < -4",
              "Divide by -2 — FLIP!: x > 2",
              "Check x = 3: -2(3)+6 = 0 < 2 ✓"
            ],
            tip: "Dividing by -2 flips < to >."
          }
        },
        {
          id: "msi-5",
          type: "multiple-choice",
          question: "Solve: 5 - 3x ≥ 11",
          choices: ["x ≤ -2", "x ≥ -2", "x ≤ 2", "x ≥ 2"],
          answer: "x ≤ -2",
          explanation: {
            steps: [
              "Subtract 5: -3x ≥ 6",
              "Divide by -3 — FLIP!: x ≤ -2",
              "Check x = -3: 5-3(-3) = 5+9 = 14 ≥ 11 ✓"
            ],
            tip: "The -3x means you'll be dividing by -3 at the end — don't forget to flip."
          }
        },
        {
          id: "msi-6",
          type: "multiple-choice",
          question: "Solve: 2(3x + 1) < 14",
          choices: ["x < 2", "x < 4", "x > 2", "x < 6"],
          answer: "x < 2",
          explanation: {
            steps: [
              "Distribute: 6x + 2 < 14",
              "Subtract 2: 6x < 12",
              "Divide by 6 (positive — no flip): x < 2",
              "Check x = 1: 2(3+1) = 8 < 14 ✓"
            ],
            tip: "Distribute before the two-step process."
          }
        },
        {
          id: "msi-7",
          type: "fill-in",
          question: "Solve: -4x + 1 ≥ 13",
          answer: "x ≤ -3",
          explanation: {
            steps: [
              "Subtract 1: -4x ≥ 12",
              "Divide by -4 — FLIP!: x ≤ -3",
              "Check x = -4: -4(-4)+1 = 17 ≥ 13 ✓"
            ],
            tip: "Remember to flip when dividing by a negative."
          }
        },
        {
          id: "msi-8",
          type: "fill-in",
          question: "Solve: 3(x + 4) - 6 > 9",
          answer: "x > -1",
          explanation: {
            steps: [
              "Distribute: 3x + 12 - 6 > 9",
              "Combine: 3x + 6 > 9",
              "Subtract 6: 3x > 3",
              "Divide by 3: x > 1"
            ],
            tip: "Distribute, then combine constants, then isolate the variable."
          }
        },
        {
          id: "msi-9",
          type: "fill-in",
          question: "Solve: 5x - 2 > 3x + 8",
          answer: "x > 5",
          explanation: {
            steps: [
              "Subtract 3x from both sides: 2x - 2 > 8",
              "Add 2: 2x > 10",
              "Divide by 2: x > 5",
              "Check x = 6: 5(6)-2=28 > 3(6)+8=26 ✓"
            ],
            tip: "Variables can be on both sides of an inequality, just like equations."
          }
        },
        {
          id: "msi-10",
          type: "fill-in",
          question: "Solve: -3(x - 2) ≤ 12",
          answer: "x ≥ -2",
          explanation: {
            steps: [
              "Distribute: -3x + 6 ≤ 12",
              "Subtract 6: -3x ≤ 6",
              "Divide by -3 — FLIP!: x ≥ -2",
              "Check x = 0: -3(0-2) = 6 ≤ 12 ✓"
            ],
            tip: "Distributing a negative changes signs inside but doesn't flip the inequality — only dividing both sides by a negative does."
          }
        }
      ],
      guide: {
        concept: "Multi-step inequalities are solved using the same steps as multi-step equations. The critical difference: whenever you multiply or divide both sides by a negative number, flip the inequality symbol. Always check your answer with a test point.",
        examples: [
          {
            problem: "Solve: -2x + 6 < 2",
            steps: ["Subtract 6: -2x < -4", "Divide by -2 (negative — FLIP!): x > 2", "Graph: open circle at 2, shade right", "Check x = 3: -2(3)+6 = 0 < 2 ✓"],
            answer: "x > 2"
          }
        ],
        tips: [
          "Only flip the inequality when you divide or multiply both sides by a negative.",
          "Adding or subtracting (even negative numbers) never flips the inequality.",
          "Use a test point to verify: pick a number in your solution set and check it satisfies the original."
        ],
        commonMistakes: [
          "Flipping the inequality when adding/subtracting: you only flip when multiplying/dividing by a negative.",
          "Forgetting to flip after dividing: -3x > 9 → x > -3 is WRONG; correct is x < -3.",
          "Distributing incorrectly with a negative outside: -(x - 3) = -x + 3, not -x - 3."
        ]
      }
    },
    {
      id: "compound-inequalities",
      title: "Compound Inequalities",
      flashcards: [
        {
          front: "What is a compound inequality?",
          back: "Two inequalities joined by 'and' or 'or'. 'And' (conjunction): both must be true at once — the solution is the INTERSECTION. 'Or' (disjunction): at least one must be true — the solution is the UNION."
        },
        {
          front: "What does an 'and' compound inequality look like on a number line?",
          back: "The solution is the overlap (intersection) of both inequalities — a bounded region between two values. Example: x > 2 AND x < 7 → the segment between 2 and 7, written 2 < x < 7. Graph: open circles at 2 and 7 with shading between."
        },
        {
          front: "What does an 'or' compound inequality look like on a number line?",
          back: "The solution is the union of both inequalities — two rays going in opposite directions. Example: x < -1 OR x > 4. Graph: open circle at -1 shading left; open circle at 4 shading right. The middle is NOT shaded."
        },
        {
          front: "How do you solve -2 < x + 1 ≤ 5?",
          back: "Subtract 1 from all three parts: -2 - 1 < x ≤ 5 - 1 → -3 < x ≤ 4. The solution is all numbers greater than -3 and at most 4. Graph: open circle at -3, closed circle at 4, shaded between."
        },
        {
          front: "How do you write a compound inequality in compact notation?",
          back: "For 'and' inequalities, write the lower bound, the variable, and the upper bound in one statement: a < x < b or a ≤ x ≤ b. Example: x > -2 and x ≤ 5 → -2 < x ≤ 5. Only 'and' can be written this way — 'or' cannot."
        },
        {
          front: "When does a compound inequality have no solution?",
          back: "'And' inequalities: if the two conditions cannot both be true at once. Example: x > 5 AND x < 2 — no number is both greater than 5 and less than 2. Graph: no region is shaded."
        },
        {
          front: "When does a compound inequality represent all real numbers?",
          back: "'Or' inequalities: if every number satisfies at least one condition. Example: x < 5 OR x > 2 — every real number is either less than 5 or greater than 2 (or both). The entire number line is shaded."
        }
      ],
      problems: [
        {
          id: "ci-1",
          type: "multiple-choice",
          question: "Solve and graph: 3 < 2x + 1 ≤ 9",
          choices: ["1 < x ≤ 4", "2 < x ≤ 5", "1 < x < 4", "1 ≤ x ≤ 4"],
          answer: "1 < x ≤ 4",
          explanation: {
            steps: [
              "Subtract 1 from all parts: 3-1 < 2x ≤ 9-1 → 2 < 2x ≤ 8",
              "Divide all parts by 2: 1 < x ≤ 4",
              "Check x = 2 (inside): 3 < 2(2)+1=5 ≤ 9 ✓",
              "Graph: open circle at 1, closed circle at 4, shade between"
            ],
            tip: "Apply the same operation to all THREE parts of the compound inequality."
          }
        },
        {
          id: "ci-2",
          type: "multiple-choice",
          question: "Solve: x + 2 > 5 OR x - 1 < -3",
          choices: ["x > 3 OR x < -2", "x > 3 AND x < -2", "x > 7 OR x < 2", "x > 3"],
          answer: "x > 3 OR x < -2",
          explanation: {
            steps: [
              "Solve first: x + 2 > 5 → x > 3",
              "Solve second: x - 1 < -3 → x < -2",
              "Combine with 'OR': x > 3 OR x < -2",
              "Graph: two rays pointing away from each other"
            ],
            tip: "'Or' means solve each inequality separately and take the union."
          }
        },
        {
          id: "ci-3",
          type: "multiple-choice",
          question: "Which compound inequality matches: closed circle at -1, open circle at 5, shaded between?",
          choices: ["-1 ≤ x < 5", "-1 < x ≤ 5", "-1 ≤ x ≤ 5", "-1 < x < 5"],
          answer: "-1 ≤ x < 5",
          explanation: {
            steps: [
              "Closed circle at -1 means -1 IS included → use ≤",
              "Open circle at 5 means 5 is NOT included → use <",
              "Shaded between → 'and' condition",
              "Result: -1 ≤ x < 5"
            ],
            tip: "Read the circles: closed = ≤ or ≥; open = < or >."
          }
        },
        {
          id: "ci-4",
          type: "multiple-choice",
          question: "Solve: -5 < 3x + 1 < 10",
          choices: ["-2 < x < 3", "-4/3 < x < 3", "-6 < x < 9", "-2 ≤ x ≤ 3"],
          answer: "-2 < x < 3",
          explanation: {
            steps: [
              "Subtract 1 from all parts: -6 < 3x < 9",
              "Divide all parts by 3: -2 < x < 3",
              "Check x = 0: -5 < 1 < 10 ✓"
            ],
            tip: "Subtract before dividing — apply each operation to all three parts."
          }
        },
        {
          id: "ci-5",
          type: "multiple-choice",
          question: "Solve: 2x + 1 < -3 OR 2x + 1 > 7",
          choices: ["x < -2 OR x > 3", "x < 2 OR x > 3", "-2 < x < 3", "x < -2"],
          answer: "x < -2 OR x > 3",
          explanation: {
            steps: [
              "Solve first: 2x + 1 < -3 → 2x < -4 → x < -2",
              "Solve second: 2x + 1 > 7 → 2x > 6 → x > 3",
              "Combine: x < -2 OR x > 3"
            ],
            tip: "For 'or', solve each part independently, then unite the solutions."
          }
        },
        {
          id: "ci-6",
          type: "multiple-choice",
          question: "What is the solution to: x > 7 AND x < 3?",
          choices: ["No solution", "All real numbers", "3 < x < 7", "x > 7"],
          answer: "No solution",
          explanation: {
            steps: [
              "x > 7 requires x to be greater than 7",
              "x < 3 requires x to be less than 3",
              "No number can be both greater than 7 AND less than 3",
              "No solution"
            ],
            tip: "If the two conditions conflict and can't both be satisfied, there's no solution."
          }
        },
        {
          id: "ci-7",
          type: "fill-in",
          question: "Solve: -1 ≤ 2x - 3 ≤ 7",
          answer: "1 ≤ x ≤ 5",
          explanation: {
            steps: [
              "Add 3 to all parts: 2 ≤ 2x ≤ 10",
              "Divide all parts by 2: 1 ≤ x ≤ 5",
              "Check x = 3: -1 ≤ 2(3)-3=3 ≤ 7 ✓"
            ],
            tip: "Add 3 to all three parts simultaneously."
          }
        },
        {
          id: "ci-8",
          type: "fill-in",
          question: "Write in interval notation: -3 < x ≤ 6",
          answer: "(-3, 6]",
          explanation: {
            steps: [
              "-3 is not included (strict <) → use parenthesis: (-3",
              "6 is included (≤) → use bracket: 6]",
              "Combine: (-3, 6]"
            ],
            tip: "Parenthesis = open (not included); bracket = closed (included). Infinity always uses ( )."
          }
        },
        {
          id: "ci-9",
          type: "fill-in",
          question: "Solve: 3x - 2 < 4 OR 5x + 1 > 21",
          answer: "x < 2 OR x > 4",
          explanation: {
            steps: [
              "Solve first: 3x - 2 < 4 → 3x < 6 → x < 2",
              "Solve second: 5x + 1 > 21 → 5x > 20 → x > 4",
              "Union: x < 2 OR x > 4"
            ],
            tip: "Solve each part independently, then write the union with 'OR'."
          }
        },
        {
          id: "ci-10",
          type: "fill-in",
          question: "Solve: -4 ≤ -2x + 2 < 8",
          answer: "-3 < x ≤ 3",
          explanation: {
            steps: [
              "Subtract 2 from all parts: -6 ≤ -2x < 6",
              "Divide all parts by -2 — FLIP all inequality symbols!",
              "3 ≥ x > -3",
              "Rewrite in standard form: -3 < x ≤ 3"
            ],
            tip: "When dividing a compound inequality by a negative, flip BOTH inequality symbols."
          }
        }
      ],
      guide: {
        concept: "Compound inequalities combine two conditions with 'and' (intersection — both must hold) or 'or' (union — at least one holds). 'And' produces a bounded interval; 'or' produces two separate rays on the number line.",
        examples: [
          {
            problem: "Solve: 3 < 2x + 1 ≤ 9",
            steps: ["Subtract 1 from all parts: 2 < 2x ≤ 8", "Divide all parts by 2: 1 < x ≤ 4", "Graph: open circle at 1, closed circle at 4, shade between"],
            answer: "1 < x ≤ 4"
          }
        ],
        tips: [
          "For compact 'and' inequalities, apply operations to ALL three parts at once.",
          "If dividing all parts by a negative, flip BOTH inequality symbols.",
          "For 'or', solve each part separately and take the union."
        ],
        commonMistakes: [
          "Forgetting to flip both symbols when dividing a compound inequality by a negative.",
          "Writing 'and' solutions as 'or' and vice versa.",
          "Misreading graphs: shading between two points is 'and'; two rays away from center is 'or'."
        ]
      }
    },
    {
      id: "absolute-value",
      title: "Absolute Value Equations & Inequalities",
      flashcards: [
        {
          front: "What is absolute value?",
          back: "The absolute value of a number is its distance from zero on the number line — always non-negative. |5| = 5, |-5| = 5, |0| = 0. The notation is vertical bars: |x|. Distance is never negative."
        },
        {
          front: "How do you solve |x| = a?",
          back: "Split into two cases: x = a OR x = -a (assuming a ≥ 0). Example: |x| = 5 → x = 5 or x = -5. If a < 0, there is NO solution (absolute value can never equal a negative number)."
        },
        {
          front: "How do you solve |x - 3| = 7?",
          back: "Split: x - 3 = 7 OR x - 3 = -7. Case 1: x = 10. Case 2: x = -4. Check: |10-3| = |7| = 7 ✓ and |-4-3| = |-7| = 7 ✓. The two solutions are x = 10 and x = -4."
        },
        {
          front: "How do you solve |x| < a (absolute value less than)?",
          back: "|x| < a means -a < x < a (and-compound inequality). The solution is the interval between -a and a. Example: |x| < 4 → -4 < x < 4. Graph: open circles at -4 and 4, shaded between. Think: 'less than' = 'between'."
        },
        {
          front: "How do you solve |x| > a (absolute value greater than)?",
          back: "|x| > a means x > a OR x < -a (or-compound inequality). Example: |x| > 5 → x > 5 OR x < -5. Graph: two rays, open circles at ±5, shading away from center. Think: 'greater than' = 'outside'."
        },
        {
          front: "What if |expression| = negative number?",
          back: "No solution. Absolute value is always ≥ 0, so it can never equal a negative. Example: |2x + 1| = -3 has no solution. Similarly, |x| < -1 has no solution; |x| > -1 has all real numbers as solutions (|x| is always ≥ 0 > -1)."
        },
        {
          front: "How do you check solutions to absolute value equations?",
          back: "Substitute each solution back into the ORIGINAL equation (with the absolute value). Example: for |x - 3| = 7, check x = 10: |10 - 3| = |7| = 7 ✓. Check x = -4: |-4 - 3| = |-7| = 7 ✓. Both solutions are valid."
        }
      ],
      problems: [
        {
          id: "av-1",
          type: "multiple-choice",
          question: "Solve: |x| = 5",
          choices: ["x = 5 or x = -5", "x = 5 only", "x = -5 only", "no solution"],
          answer: "x = 5 or x = -5",
          explanation: {
            steps: [
              "|x| = 5 means x is 5 units from zero",
              "Case 1: x = 5 (to the right of zero)",
              "Case 2: x = -5 (to the left of zero)",
              "Both values have absolute value 5"
            ],
            tip: "Absolute value equations always split into two cases (positive and negative)."
          }
        },
        {
          id: "av-2",
          type: "multiple-choice",
          question: "Solve: |x - 3| = 7",
          choices: ["x = 10 or x = -4", "x = 4 or x = -10", "x = 10 only", "x = 4 or x = -4"],
          answer: "x = 10 or x = -4",
          explanation: {
            steps: [
              "Split: x - 3 = 7 OR x - 3 = -7",
              "Case 1: x = 7 + 3 = 10",
              "Case 2: x = -7 + 3 = -4",
              "Check: |10-3|=7 ✓ and |-4-3|=|-7|=7 ✓"
            ],
            tip: "Isolate the absolute value expression first, then split into two cases."
          }
        },
        {
          id: "av-3",
          type: "multiple-choice",
          question: "Solve: |2x + 1| = 9",
          choices: ["x = 4 or x = -5", "x = 5 or x = -4", "x = 4 only", "no solution"],
          answer: "x = 4 or x = -5",
          explanation: {
            steps: [
              "Case 1: 2x + 1 = 9 → 2x = 8 → x = 4",
              "Case 2: 2x + 1 = -9 → 2x = -10 → x = -5",
              "Check: |2(4)+1|=|9|=9 ✓ and |2(-5)+1|=|-9|=9 ✓"
            ],
            tip: "Apply the two-case split to the entire expression inside the bars."
          }
        },
        {
          id: "av-4",
          type: "multiple-choice",
          question: "Solve: |x| < 4",
          choices: ["-4 < x < 4", "x > 4 or x < -4", "x < 4", "x > -4"],
          answer: "-4 < x < 4",
          explanation: {
            steps: [
              "|x| < 4 means x is less than 4 units from zero",
              "This creates a compound 'and' inequality: -4 < x < 4",
              "Check x = 0: |0| = 0 < 4 ✓",
              "Check x = 5: |5| = 5, 5 < 4? No ✓ (correctly excluded)"
            ],
            tip: "Less than → 'between'. |x| < a means -a < x < a."
          }
        },
        {
          id: "av-5",
          type: "multiple-choice",
          question: "Solve: |x - 2| ≥ 5",
          choices: ["x ≥ 7 or x ≤ -3", "x ≥ 7 or x ≤ 3", "-3 ≤ x ≤ 7", "x ≥ 3 or x ≤ -7"],
          answer: "x ≥ 7 or x ≤ -3",
          explanation: {
            steps: [
              "|x - 2| ≥ 5 means x - 2 ≥ 5 OR x - 2 ≤ -5",
              "Case 1: x ≥ 7",
              "Case 2: x ≤ -3",
              "Check x = 7: |7-2|=5 ≥ 5 ✓; check x = -3: |-5|=5 ≥ 5 ✓"
            ],
            tip: "Greater than → 'outside'. |expression| ≥ a splits into two outer rays."
          }
        },
        {
          id: "av-6",
          type: "multiple-choice",
          question: "How many solutions does |3x - 2| = -1 have?",
          choices: ["No solution", "One solution", "Two solutions", "Infinitely many"],
          answer: "No solution",
          explanation: {
            steps: [
              "Absolute value is always ≥ 0",
              "It can never equal -1 (a negative number)",
              "No value of x makes this true",
              "No solution"
            ],
            tip: "If the right side is negative, an absolute value equation has no solution."
          }
        },
        {
          id: "av-7",
          type: "fill-in",
          question: "Solve: |3x + 6| = 12",
          answer: "x = 2 or x = -6",
          explanation: {
            steps: [
              "Case 1: 3x + 6 = 12 → 3x = 6 → x = 2",
              "Case 2: 3x + 6 = -12 → 3x = -18 → x = -6",
              "Check: |3(2)+6|=|12|=12 ✓ and |3(-6)+6|=|-12|=12 ✓"
            ],
            tip: "Two solutions are the norm for absolute value equations — don't forget the negative case."
          }
        },
        {
          id: "av-8",
          type: "fill-in",
          question: "Solve: |x + 1| < 6. Write as a compound inequality.",
          answer: "-7 < x < 5",
          explanation: {
            steps: [
              "|x + 1| < 6 → -6 < x + 1 < 6",
              "Subtract 1 from all parts: -7 < x < 5",
              "Check x = 0: |0+1|=1 < 6 ✓"
            ],
            tip: "Rewrite as a compound inequality, then solve by subtracting from all three parts."
          }
        },
        {
          id: "av-9",
          type: "fill-in",
          question: "Solve: |2x - 4| > 6",
          answer: "x > 5 or x < -1",
          explanation: {
            steps: [
              "Split into or-compound: 2x - 4 > 6 OR 2x - 4 < -6",
              "Case 1: 2x > 10 → x > 5",
              "Case 2: 2x < -2 → x < -1",
              "Check x = 6: |12-4|=8 > 6 ✓; check x = -2: |-8|=8 > 6 ✓"
            ],
            tip: "Greater than → 'or' (two outward rays)."
          }
        },
        {
          id: "av-10",
          type: "fill-in",
          question: "Solve: |5 - 2x| = 3",
          answer: "x = 1 or x = 4",
          explanation: {
            steps: [
              "Case 1: 5 - 2x = 3 → -2x = -2 → x = 1",
              "Case 2: 5 - 2x = -3 → -2x = -8 → x = 4",
              "Check: |5-2|=3 ✓ and |5-8|=|-3|=3 ✓"
            ],
            tip: "The expression inside can be in any order — split into both positive and negative cases."
          }
        }
      ],
      guide: {
        concept: "Absolute value measures distance from zero — it's always non-negative. To solve absolute value equations, split into two cases. For inequalities, 'less than' gives a between-interval (and); 'greater than' gives two outer rays (or).",
        examples: [
          {
            problem: "Solve: |2x + 1| = 9",
            steps: [
              "Case 1: 2x + 1 = 9 → 2x = 8 → x = 4",
              "Case 2: 2x + 1 = -9 → 2x = -10 → x = -5"
            ],
            answer: "x = 4 or x = -5"
          },
          {
            problem: "Solve: |x - 2| ≥ 5",
            steps: [
              "Split: x - 2 ≥ 5 OR x - 2 ≤ -5",
              "Case 1: x ≥ 7",
              "Case 2: x ≤ -3"
            ],
            answer: "x ≥ 7 or x ≤ -3"
          }
        ],
        tips: [
          "Less than absolute value → between (and): |x| < a means -a < x < a.",
          "Greater than absolute value → outside (or): |x| > a means x > a or x < -a.",
          "If the right side is negative, an equation has no solution; an inequality > negative has all real numbers."
        ],
        commonMistakes: [
          "Forgetting the negative case: |x - 3| = 7 has TWO solutions, not just x = 10.",
          "Wrong direction for inequality: |x| > 4 gives two rays outward, not an interval between.",
          "Not checking solutions — extraneous solutions can appear in complex absolute value problems."
        ]
      }
    }
  ]
};
