export const unit7 = {
  id: 7,
  title: "Factoring",
  emoji: "🧩",
  color: "#fb923c",
  topics: [
    {
      id: "gcf-grouping",
      title: "GCF & Factor by Grouping",
      flashcards: [
        {
          front: "What is the GCF of a polynomial?",
          back: "The Greatest Common Factor — the largest expression that divides evenly into every term. Example: GCF of 6x² + 9x is 3x, giving 3x(2x + 3)."
        },
        {
          front: "How do you find the GCF of two or more terms?",
          back: "Find the GCF of the coefficients and the lowest power of each shared variable. Example: GCF of 12x³ and 8x² → GCF of 12 & 8 is 4, lowest power of x is x², so GCF = 4x²."
        },
        {
          front: "What are the steps to factor out the GCF from a polynomial?",
          back: "1) Find the GCF of all terms. 2) Divide each term by the GCF. 3) Write GCF × (remaining terms). Example: 10x³ - 15x² = 5x²(2x - 3)."
        },
        {
          front: "What is factoring by grouping?",
          back: "A method for 4-term polynomials: group into two pairs, factor the GCF from each pair, then factor out the common binomial. Example: x³ + 2x² + 3x + 6 → x²(x+2) + 3(x+2) = (x+2)(x²+3)."
        },
        {
          front: "What are the steps for factoring a 4-term polynomial by grouping?",
          back: "1) Group first two and last two terms. 2) Factor GCF from each group. 3) The binomials in parentheses must match. 4) Factor out that common binomial. 5) Check by FOIL/distribution."
        },
        {
          front: "How do you check if your factoring is correct?",
          back: "Multiply (expand) your factors back out — the result must equal the original polynomial. Example: Check 3x(2x+3) by distributing: 3x·2x + 3x·3 = 6x² + 9x ✓"
        },
        {
          front: "When does factoring by grouping NOT work?",
          back: "When, after factoring the GCF from each pair, the two binomials do NOT match. Try rearranging the terms or using a different grouping. Example: x³ + 3x² - 2x - 4 may need reordering."
        }
      ],
      problems: [
        {
          id: "gcf-1",
          type: "multiple-choice",
          question: "Factor completely: 12x³ + 8x² - 4x",
          choices: ["4x(3x² + 2x - 1)", "4(3x³ + 2x² - x)", "2x(6x² + 4x - 2)", "x(12x² + 8x - 4)"],
          answer: "4x(3x² + 2x - 1)",
          explanation: {
            steps: [
              "Find the GCF of all terms: GCF of 12, 8, and 4 is 4; all terms have at least x¹, so GCF = 4x",
              "Divide each term by 4x: 12x³ ÷ 4x = 3x², 8x² ÷ 4x = 2x, 4x ÷ 4x = 1",
              "Write factored form: 4x(3x² + 2x - 1)",
              "Check: 4x · 3x² = 12x³ ✓, 4x · 2x = 8x² ✓, 4x · (-1) = -4x ✓"
            ],
            tip: "Always factor out the GCF first before trying any other factoring method."
          }
        },
        {
          id: "gcf-2",
          type: "fill-in",
          question: "Factor: 6x² + 9x",
          answer: "3x(2x + 3)",
          explanation: {
            steps: [
              "GCF of 6 and 9 is 3; both terms have x, so GCF = 3x",
              "Divide: 6x² ÷ 3x = 2x, 9x ÷ 3x = 3",
              "Factored form: 3x(2x + 3)",
              "Check: 3x · 2x = 6x², 3x · 3 = 9x ✓"
            ],
            tip: "The GCF of the coefficients times the lowest power of the variable."
          }
        },
        {
          id: "gcf-3",
          type: "fill-in",
          question: "Factor completely: 15x³ - 10x² + 5x",
          answer: "5x(3x² - 2x + 1)",
          explanation: {
            steps: [
              "GCF of 15, 10, and 5 is 5; lowest power of x is x¹, so GCF = 5x",
              "Divide each term: 15x³ ÷ 5x = 3x², -10x² ÷ 5x = -2x, 5x ÷ 5x = 1",
              "Write: 5x(3x² - 2x + 1)",
              "Check: 5x·3x² = 15x³, 5x·(-2x) = -10x², 5x·1 = 5x ✓"
            ],
            tip: "Don't forget the sign when dividing negative terms."
          }
        },
        {
          id: "gcf-4",
          type: "multiple-choice",
          question: "Factor by grouping: x³ + 3x² + 2x + 6",
          choices: ["(x + 3)(x² + 2)", "(x + 2)(x² + 3)", "(x² + 3)(x + 2)", "(x + 1)(x² + 6)"],
          answer: "(x + 3)(x² + 2)",
          explanation: {
            steps: [
              "Group: (x³ + 3x²) + (2x + 6)",
              "Factor GCF from each group: x²(x + 3) + 2(x + 3)",
              "Both groups share (x + 3), factor it out: (x + 3)(x² + 2)",
              "Check by expanding: (x+3)(x²+2) = x³ + 2x + 3x² + 6 = x³ + 3x² + 2x + 6 ✓"
            ],
            tip: "After factoring each group, the binomials in parentheses must be identical."
          }
        },
        {
          id: "gcf-5",
          type: "fill-in",
          question: "Factor by grouping: 4xy + 8x - 3y - 6",
          answer: "(4x - 3)(y + 2)",
          explanation: {
            steps: [
              "Group: (4xy + 8x) + (-3y - 6)",
              "Factor GCF from each group: 4x(y + 2) + (-3)(y + 2)",
              "Factor out common binomial (y + 2): (y + 2)(4x - 3)",
              "Check: (y+2)(4x-3) = 4xy - 3y + 8x - 6 ✓"
            ],
            tip: "When the last two terms are negative, factor out a negative GCF."
          }
        },
        {
          id: "gcf-6",
          type: "multiple-choice",
          question: "What is the GCF of 24x⁴y² and 36x²y³?",
          choices: ["12x²y²", "6x²y²", "12x⁴y³", "4x²y"],
          answer: "12x²y²",
          explanation: {
            steps: [
              "GCF of coefficients: GCF(24, 36) = 12",
              "GCF of x⁴ and x²: take lowest power → x²",
              "GCF of y² and y³: take lowest power → y²",
              "GCF = 12x²y²"
            ],
            tip: "For the variable part, always take the LOWEST exponent of each variable."
          }
        },
        {
          id: "gcf-7",
          type: "fill-in",
          question: "Factor by grouping: 2x³ - 6x² + x - 3",
          answer: "(2x² + 1)(x - 3)",
          explanation: {
            steps: [
              "Group: (2x³ - 6x²) + (x - 3)",
              "Factor each group: 2x²(x - 3) + 1(x - 3)",
              "Factor out common binomial: (x - 3)(2x² + 1)",
              "Check: (x-3)(2x²+1) = 2x³ + x - 6x² - 3 = 2x³ - 6x² + x - 3 ✓"
            ],
            tip: "Sometimes the GCF of the second group is 1 — you still write it to reveal the matching binomial."
          }
        },
        {
          id: "gcf-8",
          type: "multiple-choice",
          question: "Factor completely: 18x²y - 12xy² + 6xy",
          choices: ["6xy(3x - 2y + 1)", "6x(3xy - 2y² + y)", "3xy(6x - 4y + 2)", "6y(3x² - 2xy + x)"],
          answer: "6xy(3x - 2y + 1)",
          explanation: {
            steps: [
              "GCF of 18, 12, 6 = 6; GCF of x terms = x; GCF of y terms = y → GCF = 6xy",
              "Divide: 18x²y ÷ 6xy = 3x, -12xy² ÷ 6xy = -2y, 6xy ÷ 6xy = 1",
              "Factored form: 6xy(3x - 2y + 1)",
              "Check by distributing: 6xy·3x = 18x²y, 6xy·(-2y) = -12xy², 6xy·1 = 6xy ✓"
            ],
            tip: "Include all variables in the GCF — look for the lowest power of each variable present in every term."
          }
        },
        {
          id: "gcf-9",
          type: "fill-in",
          question: "Factor by grouping: 3a² + 6a + ab + 2b",
          answer: "(3a + b)(a + 2)",
          explanation: {
            steps: [
              "Group: (3a² + 6a) + (ab + 2b)",
              "Factor each: 3a(a + 2) + b(a + 2)",
              "Factor out (a + 2): (a + 2)(3a + b)",
              "Check: (a+2)(3a+b) = 3a² + ab + 6a + 2b ✓"
            ],
            tip: "Grouping works here because after factoring each pair, (a+2) appears in both."
          }
        },
        {
          id: "gcf-10",
          type: "multiple-choice",
          question: "Which polynomial is already completely factored?",
          choices: ["5(x + 3)", "2(4x + 6)", "3(x² + 3x)", "x(2x + 4)"],
          answer: "5(x + 3)",
          explanation: {
            steps: [
              "Check 5(x+3): inside has no common factor between x and 3 → fully factored ✓",
              "Check 2(4x+6): inside can be factored as 2(2x+3), so 2·2(2x+3) = 4(2x+3) → not done",
              "Check 3(x²+3x): inside factors as x(x+3), giving 3x(x+3) → not done",
              "Check x(2x+4): inside factors as 2(x+2), giving 2x(x+2) → not done"
            ],
            tip: "After factoring out the GCF, check if the remaining factor can be simplified further."
          }
        },
        {
          id: "gcf-11",
          type: "multiple-choice",
          question: "Factor by grouping: 6x³ - 4x² - 9x + 6",
          choices: ["(3x - 2)(2x² - 3)", "(2x² + 3)(3x - 2)", "(3x + 2)(2x² - 3)", "(2x - 3)(3x² - 2)"],
          answer: "(3x - 2)(2x² - 3)",
          explanation: {
            steps: [
              "Group: (6x³ - 4x²) + (-9x + 6)",
              "Factor each group: 2x²(3x - 2) + (-3)(3x - 2)",
              "Both groups share (3x - 2): (3x - 2)(2x² - 3)",
              "Check: (3x-2)(2x²-3) = 6x³ - 9x - 4x² + 6 = 6x³ - 4x² - 9x + 6 ✓"
            ],
            tip: "Factor a negative GCF from the second group when the signs require it."
          }
        },
        {
          id: "gcf-12",
          type: "fill-in",
          question: "Factor completely: 12x³y² - 18x²y³ + 6x²y²",
          answer: "6x²y²(2x - 3y + 1)",
          explanation: {
            steps: [
              "Find GCF: GCF(12,18,6) = 6; lowest x power = x²; lowest y power = y² → GCF = 6x²y²",
              "Divide each term: 12x³y² ÷ 6x²y² = 2x; -18x²y³ ÷ 6x²y² = -3y; 6x²y² ÷ 6x²y² = 1",
              "Write: 6x²y²(2x - 3y + 1)",
              "Verify by distributing: 6x²y²·2x = 12x³y², 6x²y²·(-3y) = -18x²y³, 6x²y²·1 = 6x²y² ✓"
            ],
            tip: "With multiple variables, find the GCF for both variables simultaneously."
          }
        },
        {
          id: "gcf-13",
          type: "fill-in",
          question: "Factor by grouping: 10x³ + 15x² - 4x - 6",
          answer: "(5x² - 2)(2x + 3)",
          explanation: {
            steps: [
              "Group: (10x³ + 15x²) + (-4x - 6)",
              "Factor each: 5x²(2x + 3) + (-2)(2x + 3)",
              "Factor out (2x + 3): (2x + 3)(5x² - 2)",
              "Check: (2x+3)(5x²-2) = 10x³ - 4x + 15x² - 6 = 10x³ + 15x² - 4x - 6 ✓"
            ],
            tip: "The GCF from the second pair (-2) is negative — keep track of signs."
          }
        },
        {
          id: "gcf-14",
          type: "multiple-choice",
          question: "A rectangular garden has area (20x³ - 30x²) square feet. If one side is 10x², what is the other side?",
          choices: ["2x - 3", "2x² - 3x", "10x(2x - 3)", "20x - 30"],
          answer: "2x - 3",
          explanation: {
            steps: [
              "Area = length × width, so width = area ÷ length",
              "Factor the area: 20x³ - 30x² = 10x²(2x - 3)",
              "Divide by 10x²: (10x²)(2x - 3) ÷ 10x² = 2x - 3",
              "The other side is 2x - 3"
            ],
            tip: "Factoring the GCF reveals the dimensions directly."
          }
        },
        {
          id: "gcf-15",
          type: "fill-in",
          question: "Factor by grouping: x²y + x²z - 3y - 3z",
          answer: "(x² - 3)(y + z)",
          explanation: {
            steps: [
              "Group: (x²y + x²z) + (-3y - 3z)",
              "Factor each group: x²(y + z) + (-3)(y + z)",
              "Factor out (y + z): (y + z)(x² - 3)",
              "Check: (y+z)(x²-3) = x²y - 3y + x²z - 3z ✓"
            ],
            tip: "Sometimes the shared binomial contains two different variables — that's fine."
          }
        },
        {
          id: "gcf-16",
          type: "multiple-choice",
          question: "Factor completely: -6x³ + 9x² - 3x",
          choices: ["-3x(2x² - 3x + 1)", "-3x(2x - 1)(x - 1)", "3x(-2x² + 3x - 1)", "Both A and B are correct"],
          answer: "Both A and B are correct",
          explanation: {
            steps: [
              "Factor GCF = -3x: -3x(2x² - 3x + 1)",
              "Now factor 2x² - 3x + 1: ac = 2; factors of 2 adding to -3 → -1 and -2",
              "2x² - x - 2x + 1 = x(2x-1) - 1(2x-1) = (2x-1)(x-1)",
              "So -3x(2x-1)(x-1) is the fully factored form, equivalent to -3x(2x²-3x+1)"
            ],
            tip: "Always try to factor the remaining trinomial completely for a fully factored answer."
          }
        },
        {
          id: "gcf-17",
          type: "fill-in",
          question: "Factor by grouping: 2ax - 6bx + 3a - 9b",
          answer: "(2x + 3)(a - 3b)",
          explanation: {
            steps: [
              "Group: (2ax - 6bx) + (3a - 9b)",
              "Factor each: 2x(a - 3b) + 3(a - 3b)",
              "Factor out (a - 3b): (a - 3b)(2x + 3)",
              "Check: (a-3b)(2x+3) = 2ax + 3a - 6bx - 9b ✓"
            ],
            tip: "Grouping works with multiple variable types — look for matching binomials after each group."
          }
        }
      ],
      guide: {
        concept: "Factoring is the reverse of multiplying — you break a polynomial into simpler pieces (factors) that multiply together to give the original. Always look for a GCF first, then consider grouping for 4-term polynomials.",
        examples: [
          {
            problem: "Factor: 6x² + 9x",
            steps: ["Find GCF: GCF(6,9) = 3; both terms have x → GCF = 3x", "Divide: 6x² ÷ 3x = 2x, 9x ÷ 3x = 3", "Write: 3x(2x + 3)"],
            answer: "3x(2x + 3)"
          },
          {
            problem: "Factor by grouping: x³ + 2x² + 3x + 6",
            steps: ["Group first two and last two terms: (x³ + 2x²) + (3x + 6)", "Factor GCF from each group: x²(x + 2) + 3(x + 2)", "Factor out the common binomial: (x + 2)(x² + 3)"],
            answer: "(x + 2)(x² + 3)"
          }
        ],
        tips: [
          "Always check for a GCF before any other method.",
          "For grouping to work, the binomials after factoring each group must match.",
          "If grouping doesn't work, try rearranging the terms."
        ],
        commonMistakes: [
          "Forgetting to factor out the GCF first — it makes subsequent steps much harder.",
          "Not checking your answer by distributing back.",
          "Missing a negative sign when factoring out a negative GCF."
        ]
      }
    },
    {
      id: "factoring-trinomials-a1",
      title: "Factoring Trinomials (a = 1)",
      flashcards: [
        {
          front: "What is the form of a trinomial with a = 1?",
          back: "x² + bx + c, where the leading coefficient is 1. You factor it as (x + p)(x + q) where p + q = b and p · q = c."
        },
        {
          front: "How do you factor x² + bx + c?",
          back: "Find two numbers p and q such that p + q = b (the middle coefficient) AND p · q = c (the constant). Then write (x + p)(x + q). Example: x² + 7x + 12 → p=3, q=4 → (x+3)(x+4)."
        },
        {
          front: "What does the sign of c tell you about the factors?",
          back: "If c is POSITIVE: both factors have the same sign (both match the sign of b). If c is NEGATIVE: factors have opposite signs (the larger absolute value matches the sign of b). Example: x² - x - 6 → c<0, so signs differ → (x-3)(x+2)."
        },
        {
          front: "How do you factor x² + bx + c when both signs are positive?",
          back: "Find two positive numbers that multiply to c and add to b. Example: x² + 5x + 6 → need two positives: 2×3=6 and 2+3=5 → (x+2)(x+3)."
        },
        {
          front: "How do you factor x² - bx + c when c is positive but b is negative?",
          back: "Find two NEGATIVE numbers that multiply to c (positive) and add to -b (negative). Example: x² - 5x + 6 → need -2 and -3: (-2)(-3)=6, (-2)+(-3)=-5 → (x-2)(x-3)."
        },
        {
          front: "What is the FOIL check for factored trinomials?",
          back: "Multiply (x+p)(x+q) using FOIL: First = x², Outer = qx, Inner = px, Last = pq. So result is x² + (p+q)x + pq — must match original. Example: (x+3)(x-4) → x² - 4x + 3x - 12 = x² - x - 12 ✓"
        },
        {
          front: "What if no pair of integers works for factoring x² + bx + c?",
          back: "The trinomial is PRIME (not factorable over the integers). Example: x² + x + 1 — no integers multiply to 1 and add to 1 (only 1×1=1 but 1+1=2 ≠ 1)."
        }
      ],
      problems: [
        {
          id: "tri-a1-1",
          type: "fill-in",
          question: "Factor: x² + 7x + 12",
          answer: "(x + 3)(x + 4)",
          explanation: {
            steps: [
              "Need two numbers that multiply to 12 and add to 7",
              "List factor pairs of 12: (1,12), (2,6), (3,4)",
              "3 + 4 = 7 ✓ and 3 × 4 = 12 ✓",
              "Write: (x + 3)(x + 4)",
              "Check via FOIL: x² + 4x + 3x + 12 = x² + 7x + 12 ✓"
            ],
            tip: "Both signs positive since c > 0 and b > 0."
          }
        },
        {
          id: "tri-a1-2",
          type: "fill-in",
          question: "Factor: x² - 5x + 6",
          answer: "(x - 2)(x - 3)",
          explanation: {
            steps: [
              "c = 6 is positive, b = -5 is negative → both factors must be negative",
              "Need two negatives that multiply to 6 and add to -5",
              "(-2) × (-3) = 6 and (-2) + (-3) = -5 ✓",
              "Write: (x - 2)(x - 3)",
              "Check: x² - 3x - 2x + 6 = x² - 5x + 6 ✓"
            ],
            tip: "When c is positive and b is negative, both factors are negative."
          }
        },
        {
          id: "tri-a1-3",
          type: "fill-in",
          question: "Factor: x² + 2x - 15",
          answer: "(x + 5)(x - 3)",
          explanation: {
            steps: [
              "c = -15 is negative → factors have opposite signs",
              "Need two numbers that multiply to -15 and add to +2",
              "Try: 5 × (-3) = -15 and 5 + (-3) = 2 ✓",
              "Write: (x + 5)(x - 3)",
              "Check: x² - 3x + 5x - 15 = x² + 2x - 15 ✓"
            ],
            tip: "When c is negative, factors have opposite signs; the larger absolute value gets the sign of b."
          }
        },
        {
          id: "tri-a1-4",
          type: "multiple-choice",
          question: "Factor: x² - 9x + 20",
          choices: ["(x - 4)(x - 5)", "(x + 4)(x + 5)", "(x - 2)(x - 10)", "(x - 1)(x - 20)"],
          answer: "(x - 4)(x - 5)",
          explanation: {
            steps: [
              "c = 20 positive, b = -9 negative → both factors negative",
              "Need two negatives: multiply to 20, add to -9",
              "(-4) × (-5) = 20 and (-4) + (-5) = -9 ✓",
              "Write: (x - 4)(x - 5)",
              "Check: x² - 5x - 4x + 20 = x² - 9x + 20 ✓"
            ],
            tip: "List factor pairs of c systematically: (1,20), (2,10), (4,5)."
          }
        },
        {
          id: "tri-a1-5",
          type: "fill-in",
          question: "Factor: x² - x - 12",
          answer: "(x - 4)(x + 3)",
          explanation: {
            steps: [
              "c = -12 negative → factors have opposite signs",
              "Need multiply to -12 and add to -1",
              "Try -4 and 3: (-4)(3) = -12, (-4) + 3 = -1 ✓",
              "Write: (x - 4)(x + 3)",
              "Check: x² + 3x - 4x - 12 = x² - x - 12 ✓"
            ],
            tip: "The number with larger absolute value takes the sign of b (negative here)."
          }
        },
        {
          id: "tri-a1-6",
          type: "fill-in",
          question: "Factor: x² + 4x - 21",
          answer: "(x + 7)(x - 3)",
          explanation: {
            steps: [
              "c = -21 negative → opposite signs; b = +4 → larger factor is positive",
              "Factor pairs of 21: (1,21), (3,7)",
              "7 + (-3) = 4 and 7 × (-3) = -21 ✓",
              "Write: (x + 7)(x - 3)",
              "Check: x² - 3x + 7x - 21 = x² + 4x - 21 ✓"
            ],
            tip: "Since b is positive and c is negative, the larger of the two numbers is positive."
          }
        },
        {
          id: "tri-a1-7",
          type: "multiple-choice",
          question: "Factor: x² - 8x + 15",
          choices: ["(x - 3)(x - 5)", "(x + 3)(x + 5)", "(x - 1)(x - 15)", "(x - 5)(x + 3)"],
          answer: "(x - 3)(x - 5)",
          explanation: {
            steps: [
              "c = 15 positive, b = -8 negative → both factors negative",
              "Pairs: (-1,-15), (-3,-5)",
              "(-3) + (-5) = -8 and (-3)(-5) = 15 ✓",
              "Write: (x - 3)(x - 5)"
            ],
            tip: "Check all factor pairs before settling on an answer."
          }
        },
        {
          id: "tri-a1-8",
          type: "fill-in",
          question: "Factor: x² + 3x - 18",
          answer: "(x + 6)(x - 3)",
          explanation: {
            steps: [
              "c = -18 negative → opposite signs; b = +3 → larger is positive",
              "Factor pairs of 18: (1,18), (2,9), (3,6)",
              "6 + (-3) = 3 and 6 × (-3) = -18 ✓",
              "Write: (x + 6)(x - 3)"
            ],
            tip: "Organize your factor pairs from smallest to largest to avoid missing combinations."
          }
        },
        {
          id: "tri-a1-9",
          type: "multiple-choice",
          question: "Which trinomial is prime (cannot be factored over the integers)?",
          choices: ["x² + x + 1", "x² + 5x + 6", "x² - 7x + 12", "x² + 2x - 8"],
          answer: "x² + x + 1",
          explanation: {
            steps: [
              "For x² + x + 1: need multiply to 1, add to 1 → only pair is (1,1) but 1+1=2 ≠ 1 → prime",
              "x² + 5x + 6 = (x+2)(x+3) ✓",
              "x² - 7x + 12 = (x-3)(x-4) ✓",
              "x² + 2x - 8 = (x+4)(x-2) ✓"
            ],
            tip: "A trinomial is prime if no integer pairs satisfy both conditions simultaneously."
          }
        },
        {
          id: "tri-a1-10",
          type: "fill-in",
          question: "Factor completely: 2x² + 14x + 24 (hint: factor out the GCF first)",
          answer: "2(x + 3)(x + 4)",
          explanation: {
            steps: [
              "First, factor out GCF = 2: 2(x² + 7x + 12)",
              "Now factor x² + 7x + 12: need multiply to 12, add to 7",
              "3 × 4 = 12 and 3 + 4 = 7 ✓",
              "Write: 2(x + 3)(x + 4)",
              "Check: 2(x+3)(x+4) = 2(x²+7x+12) = 2x²+14x+24 ✓"
            ],
            tip: "Always factor out the GCF before factoring the trinomial."
          }
        },
        {
          id: "tri-a1-11",
          type: "fill-in",
          question: "Factor completely: x² - 13x + 36",
          answer: "(x - 4)(x - 9)",
          explanation: {
            steps: [
              "c = 36 positive, b = -13 negative → both factors negative",
              "List factor pairs of 36: (1,36), (2,18), (3,12), (4,9), (6,6)",
              "Need pair summing to -13: (-4) + (-9) = -13 and (-4)(-9) = 36 ✓",
              "Write: (x - 4)(x - 9)",
              "Check: x² - 9x - 4x + 36 = x² - 13x + 36 ✓"
            ],
            tip: "List all factor pairs systematically to avoid missing the right combination."
          }
        },
        {
          id: "tri-a1-12",
          type: "multiple-choice",
          question: "Factor completely: 3x² - 3x - 36",
          choices: ["3(x - 4)(x + 3)", "3(x + 4)(x - 3)", "(3x + 9)(x - 4)", "3(x² - x - 12)"],
          answer: "3(x - 4)(x + 3)",
          explanation: {
            steps: [
              "First factor out GCF = 3: 3(x² - x - 12)",
              "Factor x² - x - 12: c = -12, b = -1 → opposite signs, larger negative",
              "Need multiply to -12, add to -1: (-4)(3) = -12, (-4) + 3 = -1 ✓",
              "Write: 3(x - 4)(x + 3)",
              "Note: 3(x² - x - 12) is not fully factored — always factor the trinomial too"
            ],
            tip: "The answer 3(x² - x - 12) is incomplete — factor the trinomial inside as well."
          }
        },
        {
          id: "tri-a1-13",
          type: "fill-in",
          question: "The area of a rectangle is x² + 3x - 28 square units and one side is (x + 7) units. What is the length of the other side?",
          answer: "x - 4",
          explanation: {
            steps: [
              "Area = length × width, so other side = area ÷ (x + 7)",
              "Factor x² + 3x - 28: need multiply to -28, add to 3",
              "7 × (-4) = -28 and 7 + (-4) = 3 ✓ → (x + 7)(x - 4)",
              "Divide by (x + 7): (x + 7)(x - 4) ÷ (x + 7) = x - 4",
              "The other side is (x - 4) units"
            ],
            tip: "Factor the area expression first, then identify the matching factor."
          }
        },
        {
          id: "tri-a1-14",
          type: "multiple-choice",
          question: "Factor completely: x⁴ + 6x² - 27  (Hint: substitute u = x²)",
          choices: ["(x² + 9)(x² - 3)", "(x² - 9)(x² + 3)", "(x² + 3)²", "(x² + 9)(x - 3)(x + 3)"],
          answer: "(x² + 9)(x² - 3)",
          explanation: {
            steps: [
              "Let u = x², so the expression becomes u² + 6u - 27",
              "Factor u² + 6u - 27: need multiply to -27, add to 6",
              "9 × (-3) = -27, 9 + (-3) = 6 ✓ → (u + 9)(u - 3)",
              "Substitute back: (x² + 9)(x² - 3)",
              "x² + 9 is a sum of squares (prime over reals); x² - 3 has no integer factors"
            ],
            tip: "If the exponents are 4 and 2, substitute u = x² to convert to a standard trinomial."
          }
        },
        {
          id: "tri-a1-15",
          type: "fill-in",
          question: "Factor completely: -x² + 5x + 24",
          answer: "-(x - 8)(x + 3)",
          explanation: {
            steps: [
              "Factor out -1 to make the leading coefficient positive: -(x² - 5x - 24)",
              "Factor x² - 5x - 24: c = -24, b = -5 → need multiply to -24, add to -5",
              "(-8)(3) = -24, (-8) + 3 = -5 ✓ → (x - 8)(x + 3)",
              "Final answer: -(x - 8)(x + 3)",
              "Check: -(x-8)(x+3) = -(x²+3x-8x-24) = -(x²-5x-24) = -x²+5x+24 ✓"
            ],
            tip: "When the leading coefficient is negative, factor out -1 first."
          }
        },
        {
          id: "tri-a1-16",
          type: "fill-in",
          question: "Factor completely: x² - 4x - 32",
          answer: "(x - 8)(x + 4)",
          explanation: {
            steps: [
              "c = -32, b = -4 → opposite signs, larger is negative",
              "Factor pairs of 32: (1,32),(2,16),(4,8)",
              "-8 and 4: (-8)(4) = -32, (-8) + 4 = -4 ✓",
              "Write: (x - 8)(x + 4)",
              "Check: x² + 4x - 8x - 32 = x² - 4x - 32 ✓"
            ],
            tip: "With larger constants, be methodical listing factor pairs."
          }
        },
        {
          id: "tri-a1-17",
          type: "multiple-choice",
          question: "Solve by factoring: x² + x - 30 = 0",
          choices: ["x = 5 or x = -6", "x = -5 or x = 6", "x = 5 or x = 6", "x = -5 or x = -6"],
          answer: "x = 5 or x = -6",
          explanation: {
            steps: [
              "Factor x² + x - 30: need multiply to -30, add to 1",
              "6 × (-5) = -30 and 6 + (-5) = 1 ✓ ... check: want positive 1, so try 6 and -5",
              "Actually 6 + (-5) = 1 ✓, giving (x + 6)(x - 5) — wait: check signs",
              "c=-30, b=+1: need 6 and -5 → (x+6)(x-5); set each to 0: x=-6 or x=5",
              "Verify: (5)²+5-30=30-30=0 ✓; (-6)²+(-6)-30=36-6-30=0 ✓"
            ],
            tip: "Always verify both solutions by substituting back into the original equation."
          }
        }
      ],
      guide: {
        concept: "To factor x² + bx + c, find two integers p and q so that p × q = c and p + q = b. The sign of c tells you whether the factors share a sign (c > 0) or have opposite signs (c < 0).",
        examples: [
          {
            problem: "Factor: x² + 7x + 12",
            steps: ["Find two numbers that multiply to 12 and add to 7", "3 × 4 = 12 and 3 + 4 = 7 ✓", "Write: (x + 3)(x + 4)"],
            answer: "(x + 3)(x + 4)"
          },
          {
            problem: "Factor: x² - 3x - 10",
            steps: ["c = -10 < 0 → opposite signs; b = -3 → larger factor is negative", "2 × (-5) = -10 and 2 + (-5) = -3 ✓", "Write: (x + 2)(x - 5)"],
            answer: "(x + 2)(x - 5)"
          }
        ],
        tips: [
          "If c > 0: both factors share the same sign as b.",
          "If c < 0: factors have opposite signs; the larger absolute value takes the sign of b.",
          "Always verify with FOIL."
        ],
        commonMistakes: [
          "Getting the signs wrong — always check c and b together.",
          "Forgetting to factor out the GCF before factoring the trinomial.",
          "Not checking by FOIL — a quick check saves points on tests."
        ]
      }
    },
    {
      id: "factoring-trinomials-an1",
      title: "Factoring Trinomials (a ≠ 1)",
      flashcards: [
        {
          front: "What is the AC method for factoring ax² + bx + c when a ≠ 1?",
          back: "Multiply a × c. Find two numbers that multiply to ac and add to b. Rewrite the middle term using those two numbers, then factor by grouping. Example: 2x² + 7x + 3 → ac = 6; find 1 and 6: 1×6=6, 1+6=7 ✓ → 2x² + x + 6x + 3."
        },
        {
          front: "What are the steps for the AC method?",
          back: "1) Multiply a × c. 2) Find factors of ac that add to b. 3) Rewrite bx as the sum of two terms using those factors. 4) Factor by grouping. 5) Check by FOIL."
        },
        {
          front: "How does trial and error work for ax² + bx + c?",
          back: "Write (ax + ?)(x + ?) or (?x + ?)(?x + ?), trying factor pairs of a and c until the outer + inner products give b. Works well when a and c have few factors. Example: 3x² + 10x + 8 → try (3x + 4)(x + 2): outer 6x + inner 4x = 10x ✓."
        },
        {
          front: "What does it mean to check a factored trinomial by FOIL?",
          back: "FOIL = First, Outer, Inner, Last. Multiply (px + q)(rx + s) = prx² + (ps+qr)x + qs. The middle term ps+qr must equal b. Example: (2x+1)(x+3) = 2x² + 6x + x + 3 = 2x² + 7x + 3 ✓"
        },
        {
          front: "When is a trinomial ax² + bx + c prime (not factorable over integers)?",
          back: "When no integer factor pairs of ac add up to b. Example: 2x² + 3x + 4 → ac = 8; pairs (1,8), (2,4) give sums 9 and 6 — neither equals 3 → prime."
        },
        {
          front: "How do sign patterns help factor ax² + bx + c?",
          back: "If c > 0: both signs in factors match the sign of b. If c < 0: signs in factors are opposite. Apply same logic as a=1 case, but also consider factor pairs of a. Example: 3x² - 10x + 8 → c>0, b<0 → both factors negative: (3x - 4)(x - 2)."
        },
        {
          front: "What is the first step when factoring any trinomial?",
          back: "Always factor out the GCF first. Example: 6x² + 14x + 4 → GCF = 2 → 2(3x² + 7x + 2) → then factor 3x² + 7x + 2 = (3x + 1)(x + 2) → final: 2(3x + 1)(x + 2)."
        }
      ],
      problems: [
        {
          id: "tri-an1-1",
          type: "fill-in",
          question: "Factor: 2x² + 7x + 3",
          answer: "(2x + 1)(x + 3)",
          explanation: {
            steps: [
              "a=2, b=7, c=3; ac = 2×3 = 6",
              "Find factors of 6 that add to 7: 1 × 6 = 6, 1 + 6 = 7 ✓",
              "Rewrite: 2x² + x + 6x + 3",
              "Group: x(2x + 1) + 3(2x + 1)",
              "Factor: (2x + 1)(x + 3)"
            ],
            tip: "The AC method always works — compute ac, find the split, then group."
          }
        },
        {
          id: "tri-an1-2",
          type: "fill-in",
          question: "Factor: 3x² - 10x + 8",
          answer: "(3x - 4)(x - 2)",
          explanation: {
            steps: [
              "a=3, b=-10, c=8; ac = 24",
              "Find factors of 24 that add to -10: -4 × -6 = 24, -4 + (-6) = -10 ✓",
              "Rewrite: 3x² - 4x - 6x + 8",
              "Group: x(3x - 4) - 2(3x - 4)",
              "Factor: (3x - 4)(x - 2)"
            ],
            tip: "When c is positive and b is negative, both split terms are negative."
          }
        },
        {
          id: "tri-an1-3",
          type: "multiple-choice",
          question: "Factor: 6x² + 11x + 4",
          choices: ["(2x + 1)(3x + 4)", "(6x + 1)(x + 4)", "(2x + 4)(3x + 1)", "(3x + 2)(2x + 2)"],
          answer: "(2x + 1)(3x + 4)",
          explanation: {
            steps: [
              "a=6, b=11, c=4; ac = 24",
              "Factors of 24 that add to 11: 3 × 8 = 24, 3 + 8 = 11 ✓",
              "Rewrite: 6x² + 3x + 8x + 4",
              "Group: 3x(2x + 1) + 4(2x + 1)",
              "Factor: (2x + 1)(3x + 4)"
            ],
            tip: "Check your answer with FOIL: (2x+1)(3x+4) = 6x²+8x+3x+4 = 6x²+11x+4 ✓"
          }
        },
        {
          id: "tri-an1-4",
          type: "fill-in",
          question: "Factor: 4x² - 4x - 3",
          answer: "(2x - 3)(2x + 1)",
          explanation: {
            steps: [
              "a=4, b=-4, c=-3; ac = -12",
              "Find factors of -12 that add to -4: -6 × 2 = -12, -6 + 2 = -4 ✓",
              "Rewrite: 4x² - 6x + 2x - 3",
              "Group: 2x(2x - 3) + 1(2x - 3)",
              "Factor: (2x - 3)(2x + 1)"
            ],
            tip: "When ac is negative, factors have opposite signs; pick carefully based on b."
          }
        },
        {
          id: "tri-an1-5",
          type: "fill-in",
          question: "Factor: 2x² - x - 6",
          answer: "(2x + 3)(x - 2)",
          explanation: {
            steps: [
              "a=2, b=-1, c=-6; ac = -12",
              "Factors of -12 that add to -1: 3 × (-4) = -12, 3 + (-4) = -1 ✓",
              "Rewrite: 2x² + 3x - 4x - 6",
              "Group: x(2x + 3) - 2(2x + 3)",
              "Factor: (2x + 3)(x - 2)"
            ],
            tip: "Try to be systematic: list factor pairs of |ac| and test ± combinations."
          }
        },
        {
          id: "tri-an1-6",
          type: "multiple-choice",
          question: "Factor: 5x² + 13x - 6",
          choices: ["(5x - 2)(x + 3)", "(x + 2)(5x - 3)", "(5x + 2)(x - 3)", "(5x - 3)(x + 2)"],
          answer: "(5x - 2)(x + 3)",
          explanation: {
            steps: [
              "a=5, b=13, c=-6; ac = -30",
              "Factors of -30 that add to 13: -2 × 15 = -30, -2 + 15 = 13 ✓",
              "Rewrite: 5x² - 2x + 15x - 6",
              "Group: x(5x - 2) + 3(5x - 2)",
              "Factor: (5x - 2)(x + 3)"
            ],
            tip: "Check: (5x-2)(x+3) = 5x² + 15x - 2x - 6 = 5x² + 13x - 6 ✓"
          }
        },
        {
          id: "tri-an1-7",
          type: "fill-in",
          question: "Factor completely: 6x² - 7x + 2",
          answer: "(2x - 1)(3x - 2)",
          explanation: {
            steps: [
              "a=6, b=-7, c=2; ac = 12",
              "Factors of 12 adding to -7: -3 × -4 = 12, -3 + (-4) = -7 ✓",
              "Rewrite: 6x² - 3x - 4x + 2",
              "Group: 3x(2x - 1) - 2(2x - 1)",
              "Factor: (2x - 1)(3x - 2)"
            ],
            tip: "Verify: (2x-1)(3x-2) = 6x² - 4x - 3x + 2 = 6x² - 7x + 2 ✓"
          }
        },
        {
          id: "tri-an1-8",
          type: "multiple-choice",
          question: "Factor completely: 4x² + 12x + 8",
          choices: ["4(x + 1)(x + 2)", "2(2x + 4)(x + 1)", "(4x + 4)(x + 2)", "4(x + 2)(x + 1)"],
          answer: "4(x + 1)(x + 2)",
          explanation: {
            steps: [
              "First, GCF = 4: 4(x² + 3x + 2)",
              "Factor x² + 3x + 2: need multiply to 2, add to 3 → 1 × 2 ✓",
              "x² + 3x + 2 = (x + 1)(x + 2)",
              "Final: 4(x + 1)(x + 2)"
            ],
            tip: "Factor out the GCF first to simplify to a = 1 case."
          }
        },
        {
          id: "tri-an1-9",
          type: "fill-in",
          question: "Factor: 3x² + 5x - 2",
          answer: "(3x - 1)(x + 2)",
          explanation: {
            steps: [
              "a=3, b=5, c=-2; ac = -6",
              "Factors of -6 adding to 5: -1 × 6 = -6, -1 + 6 = 5 ✓",
              "Rewrite: 3x² - x + 6x - 2",
              "Group: x(3x - 1) + 2(3x - 1)",
              "Factor: (3x - 1)(x + 2)"
            ],
            tip: "Check: (3x-1)(x+2) = 3x² + 6x - x - 2 = 3x² + 5x - 2 ✓"
          }
        },
        {
          id: "tri-an1-10",
          type: "multiple-choice",
          question: "Which of the following is prime (not factorable over integers)?",
          choices: ["2x² + 3x + 5", "2x² + 5x + 3", "3x² + 7x + 2", "4x² + 8x + 3"],
          answer: "2x² + 3x + 5",
          explanation: {
            steps: [
              "2x² + 3x + 5: ac = 10; pairs (1,10),(2,5) give sums 11, 7 — none equal 3 → prime",
              "2x² + 5x + 3: ac = 6; 2+3=5 ✓ → (2x+3)(x+1)",
              "3x² + 7x + 2: ac = 6; 1+6=7 ✓ → (3x+1)(x+2)",
              "4x² + 8x + 3: ac = 12; 2+6=8 ✓ → (2x+1)(2x+3)"
            ],
            tip: "If no factor pair of ac adds to b, the trinomial is prime."
          }
        },
        {
          id: "tri-an1-11",
          type: "fill-in",
          question: "Factor: 8x² + 10x - 3",
          answer: "(4x - 1)(2x + 3)",
          explanation: {
            steps: [
              "a=8, b=10, c=-3; ac = -24",
              "Find factors of -24 adding to 10: -2 × 12 = -24, -2 + 12 = 10 ✓",
              "Rewrite: 8x² - 2x + 12x - 3",
              "Group: 2x(4x - 1) + 3(4x - 1)",
              "Factor: (4x - 1)(2x + 3)"
            ],
            tip: "Check: (4x-1)(2x+3) = 8x² + 12x - 2x - 3 = 8x² + 10x - 3 ✓"
          }
        },
        {
          id: "tri-an1-12",
          type: "multiple-choice",
          question: "Factor completely: 12x² - 22x + 8",
          choices: ["2(3x - 2)(2x - 2)", "2(6x - 4)(x - 1)", "2(3x - 4)(2x - 1)", "4(3x - 2)(x - 1)"],
          answer: "2(3x - 4)(2x - 1)",
          explanation: {
            steps: [
              "Factor GCF = 2: 2(6x² - 11x + 4)",
              "For 6x² - 11x + 4: ac = 24; find factors of 24 adding to -11: -3 × -8 = 24, -3 + (-8) = -11 ✓",
              "Rewrite: 6x² - 3x - 8x + 4 → 3x(2x-1) - 4(2x-1)",
              "Factor: (3x - 4)(2x - 1)",
              "Final: 2(3x - 4)(2x - 1)"
            ],
            tip: "Always factor out the GCF first — it reduces the size of ac significantly."
          }
        },
        {
          id: "tri-an1-13",
          type: "fill-in",
          question: "Factor: 9x² - 6x + 1",
          answer: "(3x - 1)²",
          explanation: {
            steps: [
              "Check for perfect square trinomial: a term = (3x)², c term = (1)²",
              "Middle check: 2·(3x)·(1) = 6x ✓, and it's negative",
              "Pattern: a² - 2ab + b² = (a - b)²",
              "Answer: (3x - 1)²",
              "Check: (3x-1)² = 9x² - 6x + 1 ✓"
            ],
            tip: "Recognize perfect square trinomials even when a ≠ 1 — they save time over the AC method."
          }
        },
        {
          id: "tri-an1-14",
          type: "fill-in",
          question: "Factor completely: 6x³ + 11x² - 10x",
          answer: "x(3x - 2)(2x + 5)",
          explanation: {
            steps: [
              "Factor GCF = x: x(6x² + 11x - 10)",
              "Factor 6x² + 11x - 10: ac = -60; need factors of -60 adding to 11",
              "-4 × 15 = -60, -4 + 15 = 11 ✓",
              "Rewrite: 6x² - 4x + 15x - 10 → 2x(3x-2) + 5(3x-2)",
              "Final: x(3x - 2)(2x + 5)"
            ],
            tip: "Always factor out the monomial GCF first before applying the AC method."
          }
        },
        {
          id: "tri-an1-15",
          type: "multiple-choice",
          question: "Solve by factoring: 6x² - x - 2 = 0",
          choices: ["x = 2/3 or x = -1/2", "x = -2/3 or x = 1/2", "x = 2/3 or x = 1/2", "x = -2/3 or x = -1/2"],
          answer: "x = 2/3 or x = -1/2",
          explanation: {
            steps: [
              "Factor 6x² - x - 2: ac = -12; factors of -12 adding to -1: -4 and 3",
              "Rewrite: 6x² - 4x + 3x - 2 → 2x(3x-2) + 1(3x-2) = (3x-2)(2x+1)",
              "Set each factor to 0: 3x - 2 = 0 → x = 2/3; 2x + 1 = 0 → x = -1/2",
              "Check x=2/3: 6(4/9) - (2/3) - 2 = 8/3 - 2/3 - 6/3 = 0 ✓"
            ],
            tip: "When the leading coefficient a ≠ 1, solutions are often fractions — leave them as fractions."
          }
        },
        {
          id: "tri-an1-16",
          type: "fill-in",
          question: "Factor: 10x² - 3x - 1",
          answer: "(5x + 1)(2x - 1)",
          explanation: {
            steps: [
              "a=10, b=-3, c=-1; ac = -10",
              "Find factors of -10 adding to -3: 2 × (-5) = -10, 2 + (-5) = -3 ✓",
              "Rewrite: 10x² + 2x - 5x - 1",
              "Group: 2x(5x + 1) - 1(5x + 1)",
              "Factor: (5x + 1)(2x - 1)"
            ],
            tip: "Check: (5x+1)(2x-1) = 10x² - 5x + 2x - 1 = 10x² - 3x - 1 ✓"
          }
        },
        {
          id: "tri-an1-17",
          type: "multiple-choice",
          question: "A ball's height is modeled by -4t² + 8t + 5 feet, where t is time in seconds. Factor this expression to find when the height equals zero.",
          choices: ["-(2t - 5)(2t + 1) = 0, so t = 5/2 or t = -1/2", "-(4t + 5)(t - 1) = 0, so t = -5/4 or t = 1", "-(2t + 5)(2t - 1) = 0, so t = -5/2 or t = 1/2", "-(4t - 5)(t + 1) = 0, so t = 5/4 or t = -1"],
          answer: "-(2t - 5)(2t + 1) = 0, so t = 5/2 or t = -1/2",
          explanation: {
            steps: [
              "Factor out -1: -(4t² - 8t - 5)",
              "Factor 4t² - 8t - 5: ac = -20; factors of -20 adding to -8: 2 × (-10) = -20, 2 + (-10) = -8 ✓",
              "Rewrite: 4t² + 2t - 10t - 5 → 2t(2t+1) - 5(2t+1) = (2t-5)(2t+1)",
              "So -4t² + 8t + 5 = -(2t-5)(2t+1)",
              "Set to 0: t = 5/2 or t = -1/2. Only t = 5/2 is valid (time ≥ 0)"
            ],
            tip: "In context problems, always check which solutions make physical sense."
          }
        }
      ],
      guide: {
        concept: "When a ≠ 1, use the AC method: multiply a·c, find two numbers that multiply to ac and add to b, split the middle term, then factor by grouping.",
        examples: [
          {
            problem: "Factor: 2x² + 7x + 3",
            steps: ["ac = 6; find factors adding to 7: 1 and 6", "Rewrite: 2x² + x + 6x + 3", "Group: x(2x+1) + 3(2x+1)", "Factor: (2x+1)(x+3)"],
            answer: "(2x + 1)(x + 3)"
          },
          {
            problem: "Factor: 6x² - x - 2",
            steps: ["ac = -12; find factors adding to -1: 3 and -4", "Rewrite: 6x² + 3x - 4x - 2", "Group: 3x(2x+1) - 2(2x+1)", "Factor: (2x+1)(3x-2)"],
            answer: "(2x + 1)(3x - 2)"
          }
        ],
        tips: [
          "Always factor out the GCF first — it might reduce a ≠ 1 case to a = 1 case.",
          "The AC method is systematic and always works.",
          "Double-check with FOIL every time."
        ],
        commonMistakes: [
          "Computing ac incorrectly — be careful with signs.",
          "Splitting the middle term wrong — the two new coefficients must add to b.",
          "Not factoring completely — forgetting to pull out a GCF first."
        ]
      }
    },
    {
      id: "difference-of-squares",
      title: "Difference of Squares & Perfect Square Trinomials",
      flashcards: [
        {
          front: "What is the difference of squares pattern?",
          back: "a² - b² = (a + b)(a - b). Requires two perfect square terms separated by subtraction. Example: x² - 9 = x² - 3² = (x+3)(x-3)."
        },
        {
          front: "How do you recognize a perfect square?",
          back: "A term is a perfect square if its coefficient is a perfect square and all variable exponents are even. Examples: 9x² = (3x)², 16y⁴ = (4y²)², 25 = 5²."
        },
        {
          front: "What is the perfect square trinomial pattern (a + b)²?",
          back: "a² + 2ab + b² = (a + b)². Recognize it: first and last terms are perfect squares, middle term = 2·(√first)·(√last). Example: x² + 6x + 9 = (x+3)² because 2·x·3 = 6x ✓."
        },
        {
          front: "What is the perfect square trinomial pattern (a - b)²?",
          back: "a² - 2ab + b² = (a - b)². Middle term is negative. Example: x² - 10x + 25 = (x-5)² because 2·x·5 = 10x and 5² = 25 ✓."
        },
        {
          front: "Is a sum of squares a² + b² factorable over the real numbers?",
          back: "No. a² + b² is prime over the real numbers. For example, x² + 4 cannot be factored using real numbers. (It factors over complex numbers, but not in Algebra 1.)"
        },
        {
          front: "How do you factor 4x² - 9?",
          back: "Recognize as difference of squares: (2x)² - 3² = (2x + 3)(2x - 3). Always identify a and b first: a = 2x, b = 3."
        },
        {
          front: "What strategies help decide which pattern to use?",
          back: "Count terms: 2 terms and subtraction → difference of squares. 3 terms → check perfect square trinomial (are first & last perfect squares? is middle = 2ab?). Otherwise use AC method or grouping."
        }
      ],
      problems: [
        {
          id: "dos-1",
          type: "fill-in",
          question: "Factor: x² - 25",
          answer: "(x + 5)(x - 5)",
          explanation: {
            steps: [
              "Recognize: x² - 25 = x² - 5²",
              "Apply a² - b² = (a+b)(a-b) with a=x, b=5",
              "Write: (x + 5)(x - 5)",
              "Check: (x+5)(x-5) = x² - 5x + 5x - 25 = x² - 25 ✓"
            ],
            tip: "Two terms, subtraction, both perfect squares → difference of squares."
          }
        },
        {
          id: "dos-2",
          type: "fill-in",
          question: "Factor: 4x² - 9",
          answer: "(2x + 3)(2x - 3)",
          explanation: {
            steps: [
              "Recognize: 4x² = (2x)² and 9 = 3²",
              "Apply difference of squares: a=2x, b=3",
              "(2x + 3)(2x - 3)",
              "Check: (2x+3)(2x-3) = 4x² - 6x + 6x - 9 = 4x² - 9 ✓"
            ],
            tip: "Always identify a and b explicitly before writing the factors."
          }
        },
        {
          id: "dos-3",
          type: "fill-in",
          question: "Factor: x² + 6x + 9",
          answer: "(x + 3)²",
          explanation: {
            steps: [
              "Check: first term x² = (x)², last term 9 = (3)²",
              "Check middle: 2·x·3 = 6x ✓ — it's a perfect square trinomial",
              "Apply a² + 2ab + b² = (a+b)² with a=x, b=3",
              "Answer: (x + 3)²"
            ],
            tip: "Perfect square trinomial: middle term = twice the product of square roots of first and last terms."
          }
        },
        {
          id: "dos-4",
          type: "fill-in",
          question: "Factor: 4x² - 12x + 9",
          answer: "(2x - 3)²",
          explanation: {
            steps: [
              "Check: 4x² = (2x)², 9 = (3)²",
              "Check middle: 2·(2x)·3 = 12x ✓, and middle is negative",
              "Apply a² - 2ab + b² = (a-b)² with a=2x, b=3",
              "Answer: (2x - 3)²"
            ],
            tip: "Negative middle term means the binomial is a-b, not a+b."
          }
        },
        {
          id: "dos-5",
          type: "fill-in",
          question: "Factor: 9x² - 16",
          answer: "(3x + 4)(3x - 4)",
          explanation: {
            steps: [
              "9x² = (3x)² and 16 = 4²",
              "Difference of squares: a=3x, b=4",
              "(3x + 4)(3x - 4)",
              "Check: 9x² - 12x + 12x - 16 = 9x² - 16 ✓"
            ],
            tip: "Make sure both terms are perfect squares and connected by subtraction."
          }
        },
        {
          id: "dos-6",
          type: "multiple-choice",
          question: "Is x² + 4 factorable over the real numbers?",
          choices: ["No, it is a sum of squares and is prime", "Yes: (x + 2)(x + 2)", "Yes: (x + 2)(x - 2)", "Yes: (x² + 2)"],
          answer: "No, it is a sum of squares and is prime",
          explanation: {
            steps: [
              "x² + 4 is a SUM of squares (+ sign between terms)",
              "The difference of squares requires subtraction: a² - b²",
              "Sum of squares a² + b² cannot be factored over the real numbers",
              "Note: (x+2)(x+2) = x²+4x+4 ≠ x²+4 — that's wrong"
            ],
            tip: "Difference of squares → factorable. Sum of squares → prime over reals."
          }
        },
        {
          id: "dos-7",
          type: "fill-in",
          question: "Factor: 25x² - 1",
          answer: "(5x + 1)(5x - 1)",
          explanation: {
            steps: [
              "25x² = (5x)² and 1 = 1²",
              "Difference of squares: a=5x, b=1",
              "(5x + 1)(5x - 1)"
            ],
            tip: "1 is always a perfect square (1 = 1²), so any square minus 1 factors."
          }
        },
        {
          id: "dos-8",
          type: "multiple-choice",
          question: "Factor: x² - 10x + 25",
          choices: ["(x - 5)²", "(x + 5)²", "(x - 5)(x + 5)", "(x - 5)(x - 5) and (x+5)(x-5)"],
          answer: "(x - 5)²",
          explanation: {
            steps: [
              "x² = x², 25 = 5² → both perfect squares",
              "Middle: 2·x·5 = 10x ✓, and it's negative",
              "Pattern: a² - 2ab + b² = (a-b)²",
              "(x - 5)²"
            ],
            tip: "A negative middle term with a perfect square trinomial gives (a-b)²."
          }
        },
        {
          id: "dos-9",
          type: "fill-in",
          question: "Factor completely: 3x² - 75",
          answer: "3(x + 5)(x - 5)",
          explanation: {
            steps: [
              "Factor out GCF = 3: 3(x² - 25)",
              "Factor x² - 25 = (x+5)(x-5)",
              "Final answer: 3(x + 5)(x - 5)",
              "Check: 3(x+5)(x-5) = 3(x²-25) = 3x² - 75 ✓"
            ],
            tip: "Always factor out the GCF first before applying special patterns."
          }
        },
        {
          id: "dos-10",
          type: "multiple-choice",
          question: "Which expression is a perfect square trinomial?",
          choices: ["x² + 8x + 16", "x² + 8x + 12", "x² + 4x + 16", "x² - 8x - 16"],
          answer: "x² + 8x + 16",
          explanation: {
            steps: [
              "x² + 8x + 16: √first = x, √last = 4; 2·x·4 = 8x ✓ — perfect square trinomial",
              "x² + 8x + 12: √12 is not integer → not perfect square trinomial",
              "x² + 4x + 16: 2·x·4 = 8x ≠ 4x → not perfect square trinomial",
              "x² - 8x - 16: last term negative → can't be perfect square trinomial"
            ],
            tip: "For a perfect square trinomial: last term must be positive, and middle = 2·√(first)·√(last)."
          }
        },
        {
          id: "dos-11",
          type: "fill-in",
          question: "Factor completely: 50x⁴ - 72x²",
          answer: "2x²(5x + 6)(5x - 6)",
          explanation: {
            steps: [
              "Factor GCF = 2x²: 2x²(25x² - 36)",
              "Recognize 25x² - 36 as difference of squares: (5x)² - 6²",
              "Factor: (5x + 6)(5x - 6)",
              "Final: 2x²(5x + 6)(5x - 6)",
              "Check: 2x²(25x²-36) = 50x⁴ - 72x² ✓"
            ],
            tip: "Always factor the GCF first — it can reduce a difference of squares with variable coefficients."
          }
        },
        {
          id: "dos-12",
          type: "multiple-choice",
          question: "Factor completely: 81x⁴ - 16",
          choices: ["(9x² + 4)(9x² - 4)", "(9x² + 4)(3x + 2)(3x - 2)", "(3x + 2)²(3x - 2)²", "(9x + 4)(9x - 4)"],
          answer: "(9x² + 4)(3x + 2)(3x - 2)",
          explanation: {
            steps: [
              "Recognize as difference of squares: (9x²)² ... wait, 81x⁴ = (9x²)² and 16 = 4²",
              "First factor: (9x² + 4)(9x² - 4)",
              "9x² + 4 is a sum of squares — prime over reals",
              "9x² - 4 = (3x)² - 2² = (3x + 2)(3x - 2) — factor again!",
              "Final: (9x² + 4)(3x + 2)(3x - 2)"
            ],
            tip: "Difference of squares can occur multiple times — always check if each factor factors further."
          }
        },
        {
          id: "dos-13",
          type: "fill-in",
          question: "Factor: 4x² + 20x + 25",
          answer: "(2x + 5)²",
          explanation: {
            steps: [
              "Check: 4x² = (2x)² and 25 = 5²",
              "Check middle: 2·(2x)·5 = 20x ✓, and middle is positive",
              "Pattern: a² + 2ab + b² = (a + b)²",
              "Answer: (2x + 5)²"
            ],
            tip: "Quickly identify perfect square trinomials by checking if middle = 2·√(first coefficient)·√(last term)."
          }
        },
        {
          id: "dos-14",
          type: "fill-in",
          question: "Factor completely: 2x³ - 8x",
          answer: "2x(x + 2)(x - 2)",
          explanation: {
            steps: [
              "Factor GCF = 2x: 2x(x² - 4)",
              "Factor x² - 4 as difference of squares: (x+2)(x-2)",
              "Final: 2x(x + 2)(x - 2)",
              "Check: 2x(x²-4) = 2x³ - 8x ✓"
            ],
            tip: "GCF first, then special patterns — never skip the GCF step."
          }
        },
        {
          id: "dos-15",
          type: "multiple-choice",
          question: "Solve by factoring: 9x² - 25 = 0",
          choices: ["x = 5/3 or x = -5/3", "x = 3/5 or x = -3/5", "x = 25/9 or x = -25/9", "x = 5 or x = -5"],
          answer: "x = 5/3 or x = -5/3",
          explanation: {
            steps: [
              "Factor as difference of squares: (3x + 5)(3x - 5) = 0",
              "Set each factor to 0: 3x + 5 = 0 → x = -5/3",
              "3x - 5 = 0 → x = 5/3",
              "Check x=5/3: 9(25/9) - 25 = 25 - 25 = 0 ✓"
            ],
            tip: "Solutions of (ax + b)(ax - b) = 0 are always x = ±b/a."
          }
        },
        {
          id: "dos-16",
          type: "fill-in",
          question: "Factor: 16x² - 40x + 25",
          answer: "(4x - 5)²",
          explanation: {
            steps: [
              "Check: 16x² = (4x)² and 25 = 5²",
              "Check middle: 2·(4x)·5 = 40x ✓, middle is negative",
              "Pattern: (a - b)² with a=4x, b=5",
              "Answer: (4x - 5)²",
              "Check: (4x-5)² = 16x² - 40x + 25 ✓"
            ],
            tip: "With larger coefficients, carefully verify that 2ab matches the middle term exactly."
          }
        },
        {
          id: "dos-17",
          type: "multiple-choice",
          question: "A square tile has area (x² + 14x + 49) cm². What is the side length?",
          choices: ["(x + 7) cm", "(x + 14) cm", "(x + 7)² cm", "(2x + 14) cm"],
          answer: "(x + 7) cm",
          explanation: {
            steps: [
              "Area of a square = side², so side = √(area)",
              "Factor x² + 14x + 49: check if perfect square trinomial",
              "√(x²) = x, √49 = 7; 2·x·7 = 14x ✓ → (x+7)²",
              "Side length = √((x+7)²) = x + 7",
              "So the side length is (x + 7) cm"
            ],
            tip: "Recognizing a perfect square trinomial directly gives you the side length of a square."
          }
        }
      ],
      guide: {
        concept: "Special factoring patterns let you factor quickly without the AC method. The two key patterns are difference of squares (a²-b²) and perfect square trinomials (a±b)².",
        examples: [
          {
            problem: "Factor: 9x² - 16",
            steps: ["Identify: 9x² = (3x)², 16 = 4²", "Difference of squares: a=3x, b=4", "(3x+4)(3x-4)"],
            answer: "(3x + 4)(3x - 4)"
          },
          {
            problem: "Factor: x² - 8x + 16",
            steps: ["x² and 16=4² are perfect squares", "Middle: 2·x·4=8x ✓, negative → (a-b)²", "(x - 4)²"],
            answer: "(x - 4)²"
          }
        ],
        tips: [
          "Difference of squares: two terms, both perfect squares, subtraction.",
          "Perfect square trinomial: three terms, first and last are perfect squares, middle = 2ab.",
          "Sum of squares (a² + b²) is prime over the reals.",
          "Always factor out the GCF before checking for patterns."
        ],
        commonMistakes: [
          "Trying to factor a sum of squares — it cannot be done over the reals.",
          "Forgetting the ± in difference of squares — one factor has + and the other has -.",
          "Not checking that the middle term is exactly 2ab for perfect square trinomials."
        ]
      }
    }
  ]
};
