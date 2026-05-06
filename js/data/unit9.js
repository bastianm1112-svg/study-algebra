export const unit9 = {
  id: 9,
  title: "Radicals & Rational Expressions",
  emoji: "🔢",
  color: "#34d399",
  topics: [
    {
      id: "simplifying-radicals",
      title: "Simplifying Radicals",
      flashcards: [
        {
          front: "What does the radical symbol √ mean?",
          back: "√n means the principal (non-negative) square root of n — the number that, when multiplied by itself, gives n. Example: √25 = 5 because 5² = 25. Note: √ always gives a non-negative result."
        },
        {
          front: "What are the perfect squares you should memorize?",
          back: "1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Their square roots are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 respectively. Recognizing these quickly is essential for simplifying radicals."
        },
        {
          front: "What is the Product Property of square roots?",
          back: "√(a·b) = √a · √b for a,b ≥ 0. Use it to break a radical into a perfect square times another factor. Example: √48 = √(16·3) = √16 · √3 = 4√3."
        },
        {
          front: "What is the process for simplifying a radical?",
          back: "1) Find the largest perfect square factor of the radicand. 2) Write the radicand as (perfect square)×(remaining). 3) Simplify the perfect square root. 4) Leave the remaining factor under the radical. Example: √72 = √(36·2) = 6√2."
        },
        {
          front: "What is simplest radical form?",
          back: "A radical is in simplest form when: the radicand has no perfect square factors other than 1, the radicand is not a fraction, and no radical appears in a denominator. Example: 3√5 is in simplest form; 3√20 is NOT (√20 = 2√5)."
        },
        {
          front: "How do you rationalize the denominator?",
          back: "Multiply numerator and denominator by the radical in the denominator. Example: 3/√5 → multiply by √5/√5 → 3√5/5. The denominator becomes rational (no radical)."
        },
        {
          front: "What are cube roots?",
          back: "∛n is the number that cubed equals n. ∛8 = 2 (since 2³=8). Simplify ∛54: find largest perfect cube factor of 54: 27 is a perfect cube, 54=27·2, so ∛54 = ∛(27·2) = 3∛2."
        }
      ],
      problems: [
        {
          id: "sr-1",
          type: "fill-in",
          question: "Simplify: √48",
          answer: "4√3",
          explanation: {
            steps: [
              "Find the largest perfect square factor of 48",
              "48 = 16 × 3 (16 is the largest perfect square factor)",
              "√48 = √(16·3) = √16 · √3",
              "= 4√3"
            ],
            tip: "Always find the LARGEST perfect square factor to simplify in one step."
          }
        },
        {
          id: "sr-2",
          type: "fill-in",
          question: "Simplify: √75",
          answer: "5√3",
          explanation: {
            steps: [
              "Factor 75: 75 = 25 × 3",
              "25 is a perfect square (5² = 25)",
              "√75 = √(25·3) = √25 · √3 = 5√3"
            ],
            tip: "75 = 25 × 3; 25 is the largest perfect square factor."
          }
        },
        {
          id: "sr-3",
          type: "fill-in",
          question: "Simplify: √200",
          answer: "10√2",
          explanation: {
            steps: [
              "Factor 200: 200 = 100 × 2",
              "100 = 10² is a perfect square",
              "√200 = √(100·2) = 10√2"
            ],
            tip: "200 = 4×50 = 4×25×2 — but 100×2 is simpler: largest perfect square factor is 100."
          }
        },
        {
          id: "sr-4",
          type: "fill-in",
          question: "Simplify: 3√12",
          answer: "6√3",
          explanation: {
            steps: [
              "Simplify √12 first: 12 = 4 × 3, so √12 = 2√3",
              "Multiply by 3: 3 · 2√3 = 6√3"
            ],
            tip: "Simplify the radical first, then multiply by the coefficient."
          }
        },
        {
          id: "sr-5",
          type: "fill-in",
          question: "Simplify: √(x⁶)",
          answer: "x³",
          explanation: {
            steps: [
              "√(x⁶) = (x⁶)^(1/2) = x^(6/2) = x³",
              "Or: x⁶ = (x³)², so √(x⁶) = x³",
              "Check: (x³)² = x⁶ ✓"
            ],
            tip: "Divide the exponent by 2 when taking the square root of a variable."
          }
        },
        {
          id: "sr-6",
          type: "fill-in",
          question: "Simplify: √(18x²)",
          answer: "3x√2",
          explanation: {
            steps: [
              "√(18x²) = √18 · √(x²)",
              "√(x²) = x (assuming x ≥ 0)",
              "√18 = √(9·2) = 3√2",
              "Result: 3√2 · x = 3x√2"
            ],
            tip: "Handle the number and variable parts separately."
          }
        },
        {
          id: "sr-7",
          type: "fill-in",
          question: "Simplify: 5√8",
          answer: "10√2",
          explanation: {
            steps: [
              "Simplify √8: 8 = 4 × 2, so √8 = 2√2",
              "Multiply: 5 · 2√2 = 10√2"
            ],
            tip: "4 is the largest perfect square factor of 8."
          }
        },
        {
          id: "sr-8",
          type: "multiple-choice",
          question: "Which is the simplified form of √(50x⁴)?",
          choices: ["5x²√2", "5√(2x⁴)", "25x²√2", "5x⁴√2"],
          answer: "5x²√2",
          explanation: {
            steps: [
              "√(50x⁴) = √50 · √(x⁴)",
              "√50 = √(25·2) = 5√2",
              "√(x⁴) = x²",
              "Result: 5x²√2"
            ],
            tip: "Split numerical and variable parts, simplify each."
          }
        },
        {
          id: "sr-9",
          type: "fill-in",
          question: "Rationalize the denominator: 4/√2",
          answer: "2√2",
          explanation: {
            steps: [
              "Multiply by √2/√2: 4/√2 · √2/√2 = 4√2/2",
              "Simplify: 4√2/2 = 2√2"
            ],
            tip: "Multiply numerator and denominator by the same radical."
          }
        },
        {
          id: "sr-10",
          type: "fill-in",
          question: "Simplify: √(45x²y²)",
          answer: "3xy√5",
          explanation: {
            steps: [
              "√(45x²y²) = √45 · √(x²) · √(y²)",
              "√45 = √(9·5) = 3√5",
              "√(x²) = x and √(y²) = y",
              "Result: 3√5 · x · y = 3xy√5"
            ],
            tip: "Handle each factor separately: number, and each variable."
          }
        }
      ],
      guide: {
        concept: "A radical √n is in simplest form when the radicand has no perfect square factors. Factor out the largest perfect square, apply the product property, and simplify.",
        examples: [
          {
            problem: "Simplify √72",
            steps: ["Largest perfect square factor of 72: 36 (72 = 36×2)", "√72 = √(36·2) = 6√2"],
            answer: "6√2"
          },
          {
            problem: "Simplify √(32x⁴)",
            steps: ["√32 = √(16·2) = 4√2", "√(x⁴) = x²", "Result: 4x²√2"],
            answer: "4x²√2"
          }
        ],
        tips: [
          "Memorize perfect squares up to 144.",
          "Always use the LARGEST perfect square factor to simplify in one step.",
          "For variable exponents, divide by 2 (even exponents simplify cleanly)."
        ],
        commonMistakes: [
          "Using a smaller perfect square factor and needing multiple steps (e.g., √48 = √(4·12) = 2√12 — then you still need to simplify √12).",
          "Forgetting there's no real square root of a negative number.",
          "Not fully simplifying the radical (leaving perfect square factors inside)."
        ]
      }
    },
    {
      id: "radical-operations",
      title: "Radical Operations",
      flashcards: [
        {
          front: "What are like radicals?",
          back: "Radical expressions with the same radicand (the number under the radical). Like radicals can be combined. Example: 3√5 and 7√5 are like (both have √5). 3√5 and 3√7 are NOT like (different radicands)."
        },
        {
          front: "How do you add and subtract like radicals?",
          back: "Add/subtract the coefficients; keep the radical the same. a√n + b√n = (a+b)√n. Example: 4√3 + 5√3 = 9√3. For unlike radicals, simplify first — they may become like. Example: √12 + √3 = 2√3 + √3 = 3√3."
        },
        {
          front: "How do you multiply radicals?",
          back: "Multiply the numbers under the radicals together: √a · √b = √(ab). Then simplify. Example: √6 · √10 = √60 = √(4·15) = 2√15."
        },
        {
          front: "What is the product rule for radicals?",
          back: "√a · √b = √(ab), and conversely √(ab) = √a · √b. This lets you split radicals to simplify or combine them. Example: 3√2 · 4√3 = 12√6 (multiply coefficients, multiply radicands)."
        },
        {
          front: "Why do you simplify before combining radicals?",
          back: "Two radicals may look unlike but become like after simplification. Example: √8 + √2 looks unlike, but √8 = 2√2, so 2√2 + √2 = 3√2. Always simplify FIRST."
        },
        {
          front: "What does (√a)² equal?",
          back: "(√a)² = a for a ≥ 0. Squaring a square root cancels out the radical. Example: (√7)² = 7; (3√5)² = 9·5 = 45."
        },
        {
          front: "How do you multiply radical expressions with binomials?",
          back: "Use FOIL or the distributive property. Example: (2+√3)(2-√3) = 4 - (√3)² = 4-3 = 1 (difference of squares pattern). Example: (1+√2)(3+√2) = 3+√2+3√2+2 = 5+4√2."
        }
      ],
      problems: [
        {
          id: "ro-1",
          type: "fill-in",
          question: "Simplify: 3√2 + 5√2",
          answer: "8√2",
          explanation: {
            steps: [
              "Like radicals: same radicand √2",
              "Add coefficients: 3 + 5 = 8",
              "Result: 8√2"
            ],
            tip: "Treat √2 like a variable: 3x + 5x = 8x."
          }
        },
        {
          id: "ro-2",
          type: "fill-in",
          question: "Simplify: 4√3 - √3",
          answer: "3√3",
          explanation: {
            steps: [
              "Like radicals: same radicand √3",
              "Subtract: 4 - 1 = 3",
              "Result: 3√3"
            ],
            tip: "√3 alone has an understood coefficient of 1."
          }
        },
        {
          id: "ro-3",
          type: "fill-in",
          question: "Simplify: 2√5 + 3√20",
          answer: "8√5",
          explanation: {
            steps: [
              "Simplify √20: √(4·5) = 2√5",
              "Rewrite: 2√5 + 3·(2√5) = 2√5 + 6√5",
              "Add like radicals: 8√5"
            ],
            tip: "Always simplify each radical before adding."
          }
        },
        {
          id: "ro-4",
          type: "fill-in",
          question: "Multiply and simplify: √3 · √12",
          answer: "6",
          explanation: {
            steps: [
              "√3 · √12 = √(3·12) = √36",
              "√36 = 6"
            ],
            tip: "When the product is a perfect square, the result is a whole number."
          }
        },
        {
          id: "ro-5",
          type: "fill-in",
          question: "Simplify: √6 · √6",
          answer: "6",
          explanation: {
            steps: [
              "√6 · √6 = (√6)² = 6"
            ],
            tip: "Any radical squared equals its radicand."
          }
        },
        {
          id: "ro-6",
          type: "fill-in",
          question: "Multiply and simplify: (2 + √3)(2 - √3)",
          answer: "1",
          explanation: {
            steps: [
              "Recognize difference of squares pattern: (a+b)(a-b) = a² - b²",
              "a = 2, b = √3",
              "(2)² - (√3)² = 4 - 3 = 1"
            ],
            tip: "Conjugate pairs (a+√b)(a-√b) always produce rational results."
          }
        },
        {
          id: "ro-7",
          type: "fill-in",
          question: "Multiply and simplify: 3√2 · 4√8",
          answer: "48",
          explanation: {
            steps: [
              "Multiply coefficients: 3·4 = 12",
              "Multiply radicands: √2 · √8 = √16 = 4",
              "Result: 12 · 4 = 48"
            ],
            tip: "Multiply coefficients together and radicands together."
          }
        },
        {
          id: "ro-8",
          type: "fill-in",
          question: "Simplify: √27 + √75 - √3",
          answer: "6√3",
          explanation: {
            steps: [
              "√27 = √(9·3) = 3√3",
              "√75 = √(25·3) = 5√3",
              "3√3 + 5√3 - √3 = (3+5-1)√3 = 7√3"
            ],
            tip: "Simplify all radicals first, then combine like terms.",
            correction: "3√3 + 5√3 - √3 = 7√3"
          }
        },
        {
          id: "ro-9",
          type: "multiple-choice",
          question: "Expand and simplify: (1 + √5)²",
          choices: ["6 + 2√5", "1 + 5", "6 - 2√5", "1 + 2√5 + 5"],
          answer: "6 + 2√5",
          explanation: {
            steps: [
              "Use (a+b)² = a² + 2ab + b²",
              "a=1, b=√5: 1² + 2(1)(√5) + (√5)²",
              "= 1 + 2√5 + 5",
              "= 6 + 2√5"
            ],
            tip: "(√5)² = 5 — simplify the squared radical to a whole number."
          }
        },
        {
          id: "ro-10",
          type: "fill-in",
          question: "Multiply and simplify: √2 · √10",
          answer: "2√5",
          explanation: {
            steps: [
              "√2 · √10 = √(2·10) = √20",
              "√20 = √(4·5) = 2√5"
            ],
            tip: "Multiply under the radical, then simplify the result."
          }
        }
      ],
      guide: {
        concept: "You can only add/subtract like radicals (same radicand). Always simplify first. Multiplication uses the product rule: √a · √b = √(ab).",
        examples: [
          {
            problem: "Simplify: √18 + √8",
            steps: ["√18 = 3√2, √8 = 2√2", "3√2 + 2√2 = 5√2"],
            answer: "5√2"
          },
          {
            problem: "Multiply: 2√3 · 5√6",
            steps: ["Coefficients: 2·5 = 10", "Radicands: √3·√6 = √18 = 3√2", "Result: 10·3√2 = 30√2"],
            answer: "30√2"
          }
        ],
        tips: [
          "Simplify every radical before trying to combine.",
          "Like radicals have the same number under the √ — add/subtract coefficients only.",
          "For multiplication, multiply coefficients together and radicands together."
        ],
        commonMistakes: [
          "Adding unlike radicals: √2 + √3 ≠ √5.",
          "Not simplifying before adding: leaving √12 + √3 without simplifying √12.",
          "Squaring incorrectly: (3√2)² ≠ 9, it equals 9·2 = 18."
        ]
      }
    },
    {
      id: "rational-expressions",
      title: "Basic Rational Expressions",
      flashcards: [
        {
          front: "What is a rational expression?",
          back: "A fraction where the numerator and/or denominator is a polynomial. Examples: (x+3)/(x-2), (x²+5x+6)/(x+3), 5/(x²-1). They behave like regular fractions but with polynomial arithmetic."
        },
        {
          front: "When is a rational expression undefined?",
          back: "When the denominator equals zero — division by zero is undefined. Find values by setting the denominator = 0 and solving. Example: (x+3)/(x-5) is undefined when x-5=0, i.e., x=5."
        },
        {
          front: "How do you simplify a rational expression?",
          back: "Factor numerator and denominator completely, then cancel common factors. Example: (x²-4)/(x-2) = (x+2)(x-2)/(x-2) = x+2 (where x≠2)."
        },
        {
          front: "Why is a cancelled factor still a restriction?",
          back: "Even after simplifying, the original restriction remains. (x²-4)/(x-2) = x+2, but x≠2 still (the original denominator was 0 there). We write x+2, x≠2."
        },
        {
          front: "How do you multiply rational expressions?",
          back: "Multiply numerators together, multiply denominators together, then simplify. Better: factor everything first, cancel common factors, then multiply. Example: (x/3)·(9/x²) = 9x/(3x²) = 3/x."
        },
        {
          front: "How do you divide rational expressions?",
          back: "Multiply by the reciprocal of the divisor: (a/b)÷(c/d) = (a/b)·(d/c). Then simplify. Example: (x+1)/2 ÷ (x+1)/6 = (x+1)/2 · 6/(x+1) = 6/2 = 3."
        },
        {
          front: "How do you add/subtract rational expressions with the same denominator?",
          back: "Add/subtract the numerators, keep the denominator, then simplify. (a/c) + (b/c) = (a+b)/c. Example: 3x/(x+1) + 2x/(x+1) = 5x/(x+1)."
        }
      ],
      problems: [
        {
          id: "re-1",
          type: "fill-in",
          question: "Simplify: (x² - 4)/(x - 2)",
          answer: "x + 2",
          explanation: {
            steps: [
              "Factor the numerator: x² - 4 = (x+2)(x-2)",
              "Write: (x+2)(x-2) / (x-2)",
              "Cancel the common factor (x-2): x + 2",
              "Note: x ≠ 2 (the original denominator cannot be 0)"
            ],
            tip: "Always factor before cancelling — never cancel individual terms."
          }
        },
        {
          id: "re-2",
          type: "fill-in",
          question: "For what value of x is (x + 3)/(x - 5) undefined?",
          answer: "x = 5",
          explanation: {
            steps: [
              "Set the denominator equal to zero: x - 5 = 0",
              "Solve: x = 5",
              "The expression is undefined when x = 5"
            ],
            tip: "Division by zero is undefined — always check the denominator."
          }
        },
        {
          id: "re-3",
          type: "fill-in",
          question: "Simplify: 6x²y / (4xy²)",
          answer: "3x / (2y)",
          explanation: {
            steps: [
              "Divide coefficients: 6/4 = 3/2",
              "Divide x terms: x²/x = x",
              "Divide y terms: y/y² = 1/y",
              "Result: 3x/(2y)"
            ],
            tip: "Cancel common numerical and variable factors."
          }
        },
        {
          id: "re-4",
          type: "fill-in",
          question: "Multiply and simplify: (x/3) · (9/x²)",
          answer: "3/x",
          explanation: {
            steps: [
              "Multiply numerators: x · 9 = 9x",
              "Multiply denominators: 3 · x² = 3x²",
              "Result: 9x/(3x²)",
              "Simplify: 9/(3x) = 3/x"
            ],
            tip: "Multiply then simplify, or cancel cross-factors before multiplying."
          }
        },
        {
          id: "re-5",
          type: "fill-in",
          question: "Divide and simplify: (x+1)/2 ÷ (x+1)/6",
          answer: "3",
          explanation: {
            steps: [
              "Flip and multiply: (x+1)/2 · 6/(x+1)",
              "Cancel (x+1): 6/2",
              "Simplify: 3"
            ],
            tip: "Division = multiply by the reciprocal; then cancel common factors."
          }
        },
        {
          id: "re-6",
          type: "fill-in",
          question: "Add: 3x/(x+1) + 2x/(x+1)",
          answer: "5x/(x+1)",
          explanation: {
            steps: [
              "Same denominator: add numerators",
              "3x + 2x = 5x",
              "Result: 5x/(x+1)"
            ],
            tip: "Same denominator → just add the numerators."
          }
        },
        {
          id: "re-7",
          type: "fill-in",
          question: "Simplify: (x² + 5x + 6)/(x + 2)",
          answer: "x + 3",
          explanation: {
            steps: [
              "Factor numerator: x² + 5x + 6 = (x+2)(x+3)",
              "Write: (x+2)(x+3)/(x+2)",
              "Cancel (x+2): x+3",
              "Note: x ≠ -2"
            ],
            tip: "Factor completely before attempting to cancel."
          }
        },
        {
          id: "re-8",
          type: "multiple-choice",
          question: "For what values of x is (x+2)/((x-1)(x+3)) undefined?",
          choices: ["x = 1 or x = -3", "x = -2", "x = 1 only", "x = -3 only"],
          answer: "x = 1 or x = -3",
          explanation: {
            steps: [
              "Denominator = (x-1)(x+3)",
              "Set each factor to 0: x-1=0 → x=1; x+3=0 → x=-3",
              "Undefined at x=1 or x=-3"
            ],
            tip: "Set each factor in the denominator equal to zero."
          }
        },
        {
          id: "re-9",
          type: "fill-in",
          question: "Multiply and simplify: (x²-9)/(x+1) · (x+1)/(x+3)",
          answer: "x - 3",
          explanation: {
            steps: [
              "Factor x²-9 = (x+3)(x-3)",
              "Write: (x+3)(x-3)/(x+1) · (x+1)/(x+3)",
              "Cancel (x+1) and (x+3)",
              "Result: x-3"
            ],
            tip: "Factor all polynomials before multiplying — cancel diagonally."
          }
        },
        {
          id: "re-10",
          type: "fill-in",
          question: "Subtract: (2x+1)/(x-3) - (x-2)/(x-3)",
          answer: "(x+3)/(x-3)",
          explanation: {
            steps: [
              "Same denominator (x-3): subtract numerators",
              "(2x+1) - (x-2) = 2x+1-x+2 = x+3",
              "Result: (x+3)/(x-3)"
            ],
            tip: "Distribute the minus sign carefully when subtracting numerators."
          }
        }
      ],
      guide: {
        concept: "Rational expressions are fractions with polynomial numerators and denominators. Simplify by factoring and cancelling. Remember: division by zero is undefined — always state restrictions.",
        examples: [
          {
            problem: "Simplify: (x²-9)/(x+3)",
            steps: ["Factor: (x+3)(x-3)/(x+3)", "Cancel (x+3): x-3", "Restriction: x ≠ -3"],
            answer: "x - 3, x ≠ -3"
          },
          {
            problem: "Multiply: (2x/y) · (y²/4x²)",
            steps: ["Multiply: 2xy²/(4x²y)", "Simplify: y/(2x)"],
            answer: "y/(2x)"
          }
        ],
        tips: [
          "Always factor completely before simplifying — never cancel terms, only factors.",
          "State the domain restrictions (values where denominator = 0).",
          "For division, flip the second fraction and multiply.",
          "For same-denominator addition/subtraction, just operate on the numerators."
        ],
        commonMistakes: [
          "Cancelling terms instead of factors: (x+3)/(x+5) ≠ 3/5.",
          "Forgetting domain restrictions after cancelling a factor.",
          "Sign errors when subtracting numerators — distribute the minus."
        ]
      }
    }
  ]
};
