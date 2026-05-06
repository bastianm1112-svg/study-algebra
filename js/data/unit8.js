export const unit8 = {
  id: 8,
  title: "Quadratic Equations",
  emoji: "📐",
  color: "#a78bfa",
  topics: [
    {
      id: "solving-by-factoring",
      title: "Solving Quadratic Equations by Factoring",
      flashcards: [
        {
          front: "What is standard form of a quadratic equation?",
          back: "ax² + bx + c = 0, where a ≠ 0. Everything is on one side; the other side is 0. Example: x² - 5x + 6 = 0 is standard form. x² = 5x is NOT in standard form yet."
        },
        {
          front: "What is the Zero Product Property?",
          back: "If A · B = 0, then A = 0 OR B = 0. This is the foundation for solving by factoring. Example: (x-3)(x+2) = 0 → x-3=0 or x+2=0 → x=3 or x=-2."
        },
        {
          front: "What are the steps for solving a quadratic equation by factoring?",
          back: "1) Write in standard form (= 0). 2) Factor completely. 3) Set each factor equal to 0. 4) Solve each equation. 5) Check solutions in the original equation."
        },
        {
          front: "What are roots, zeros, and solutions of a quadratic?",
          back: "All three words mean the same thing — the values of x that make the equation true (equal zero). Example: x² - 4 = 0 has roots/zeros/solutions x = 2 and x = -2."
        },
        {
          front: "How many solutions does a quadratic equation have?",
          back: "A quadratic can have 0, 1, or 2 real solutions. Factoring gives 2 linear factors → typically 2 solutions. If both factors are identical, you get a double root (1 unique solution)."
        },
        {
          front: "What is a double root?",
          back: "When a quadratic factors as (x - r)² = 0, giving x = r as the only solution (counted twice). Example: x² - 6x + 9 = 0 → (x-3)² = 0 → x = 3 (double root)."
        },
        {
          front: "How are factors connected to x-intercepts of a parabola?",
          back: "The solutions of ax²+bx+c = 0 are the x-intercepts (where the parabola crosses the x-axis). Example: x²-5x+6=0 has solutions x=2 and x=3, meaning the parabola crosses the x-axis at (2,0) and (3,0)."
        }
      ],
      problems: [
        {
          id: "sbf-1",
          type: "fill-in",
          question: "Solve by factoring: x² + 5x + 6 = 0",
          answer: "x = -2 or x = -3",
          explanation: {
            steps: [
              "Already in standard form: x² + 5x + 6 = 0",
              "Factor: find two numbers that multiply to 6 and add to 5 → 2 and 3",
              "(x + 2)(x + 3) = 0",
              "Set each factor to 0: x + 2 = 0 → x = -2; x + 3 = 0 → x = -3",
              "Check: (-2)²+5(-2)+6 = 4-10+6 = 0 ✓; (-3)²+5(-3)+6 = 9-15+6 = 0 ✓"
            ],
            tip: "Always check both solutions in the original equation."
          }
        },
        {
          id: "sbf-2",
          type: "fill-in",
          question: "Solve by factoring: x² - 7x + 12 = 0",
          answer: "x = 3 or x = 4",
          explanation: {
            steps: [
              "Factor x² - 7x + 12: two numbers multiply to 12, add to -7 → -3 and -4",
              "(x - 3)(x - 4) = 0",
              "x - 3 = 0 → x = 3; x - 4 = 0 → x = 4",
              "Check: 9 - 21 + 12 = 0 ✓; 16 - 28 + 12 = 0 ✓"
            ],
            tip: "Both solutions positive since we get two negative factors."
          }
        },
        {
          id: "sbf-3",
          type: "fill-in",
          question: "Solve by factoring: 2x² + x - 6 = 0",
          answer: "x = 3/2 or x = -2",
          explanation: {
            steps: [
              "Factor 2x² + x - 6 using AC method: ac = -12; factors -3 and 4 sum to 1",
              "Rewrite: 2x² - 3x + 4x - 6 → x(2x-3) + 2(2x-3) = (2x-3)(x+2)",
              "(2x - 3)(x + 2) = 0",
              "2x - 3 = 0 → x = 3/2; x + 2 = 0 → x = -2",
              "Check: 2(9/4) + 3/2 - 6 = 9/2 + 3/2 - 6 = 6 - 6 = 0 ✓"
            ],
            tip: "Solutions can be fractions — leave as fractions in simplest form."
          }
        },
        {
          id: "sbf-4",
          type: "fill-in",
          question: "Solve: x² - 9 = 0",
          answer: "x = 3 or x = -3",
          explanation: {
            steps: [
              "Factor as difference of squares: x² - 9 = (x+3)(x-3)",
              "(x + 3)(x - 3) = 0",
              "x + 3 = 0 → x = -3; x - 3 = 0 → x = 3",
              "Solutions: x = ±3"
            ],
            tip: "Difference of squares gives two solutions that are opposites."
          }
        },
        {
          id: "sbf-5",
          type: "fill-in",
          question: "Solve: x² + 6x = 0",
          answer: "x = 0 or x = -6",
          explanation: {
            steps: [
              "Write in standard form: x² + 6x = 0",
              "Factor out GCF: x(x + 6) = 0",
              "x = 0 or x + 6 = 0",
              "x = 0 or x = -6"
            ],
            tip: "Don't divide both sides by x — you'd lose the solution x = 0!"
          }
        },
        {
          id: "sbf-6",
          type: "fill-in",
          question: "Solve: 3x² - 12 = 0",
          answer: "x = 2 or x = -2",
          explanation: {
            steps: [
              "Factor GCF: 3(x² - 4) = 0",
              "Divide both sides by 3: x² - 4 = 0",
              "Factor: (x+2)(x-2) = 0",
              "x = -2 or x = 2"
            ],
            tip: "Dividing by a nonzero constant doesn't change the solutions."
          }
        },
        {
          id: "sbf-7",
          type: "multiple-choice",
          question: "Solve: x² - 6x + 9 = 0",
          choices: ["x = 3 only (double root)", "x = 3 or x = -3", "x = 3 or x = 9", "x = -3 only"],
          answer: "x = 3 only (double root)",
          explanation: {
            steps: [
              "Factor: x² - 6x + 9 = (x - 3)²",
              "(x - 3)² = 0",
              "x - 3 = 0 → x = 3",
              "This is a double root — x = 3 is the only solution"
            ],
            tip: "A perfect square trinomial = 0 always gives a double root."
          }
        },
        {
          id: "sbf-8",
          type: "fill-in",
          question: "Solve: x² - 3x - 10 = 0",
          answer: "x = 5 or x = -2",
          explanation: {
            steps: [
              "Factor: find two numbers multiply to -10, add to -3 → -5 and 2 ... wait: try 5 and -2: 5×(-2)=-10, 5+(-2)=3. Need add to -3: use (-5)(2): (-5)×2=-10, -5+2=-3 ✓",
              "(x - 5)(x + 2) = 0",
              "x = 5 or x = -2"
            ],
            tip: "Be careful with sign combinations when c is negative."
          }
        },
        {
          id: "sbf-9",
          type: "multiple-choice",
          question: "Rewrite in standard form, then solve: 2x² = 8x",
          choices: ["x = 0 or x = 4", "x = 4 only", "x = 0 or x = -4", "x = ±4"],
          answer: "x = 0 or x = 4",
          explanation: {
            steps: [
              "Move all terms to one side: 2x² - 8x = 0",
              "Factor GCF: 2x(x - 4) = 0",
              "2x = 0 → x = 0; x - 4 = 0 → x = 4",
              "Solutions: x = 0 or x = 4"
            ],
            tip: "Never cancel x from both sides — always move to one side and factor."
          }
        },
        {
          id: "sbf-10",
          type: "fill-in",
          question: "Solve: (x + 1)(x - 4) = 6",
          answer: "x = 5 or x = -2",
          explanation: {
            steps: [
              "Expand the left side: x² - 4x + x - 4 = 6 → x² - 3x - 4 = 6",
              "Subtract 6: x² - 3x - 10 = 0",
              "Factor: (x - 5)(x + 2) = 0",
              "x = 5 or x = -2"
            ],
            tip: "Must get standard form (= 0) before using Zero Product Property."
          }
        }
      ],
      guide: {
        concept: "To solve a quadratic by factoring: get standard form (= 0), factor, set each factor equal to 0, solve. The Zero Product Property is the key — if a product equals 0, at least one factor must be 0.",
        examples: [
          {
            problem: "Solve: x² + x - 12 = 0",
            steps: ["Factor: (x+4)(x-3) = 0", "Set each to zero: x+4=0 → x=-4; x-3=0 → x=3", "Solutions: x = -4 or x = 3"],
            answer: "x = -4 or x = 3"
          },
          {
            problem: "Solve: 2x² - 8x = 0",
            steps: ["Factor GCF: 2x(x-4) = 0", "2x=0 → x=0; x-4=0 → x=4", "Solutions: x = 0 or x = 4"],
            answer: "x = 0 or x = 4"
          }
        ],
        tips: [
          "Always put the equation in standard form (= 0) first.",
          "Never divide by x — you'll lose the solution x = 0.",
          "The number of x-intercepts on the parabola equals the number of real solutions."
        ],
        commonMistakes: [
          "Setting factors equal to each other instead of to 0.",
          "Dividing both sides by x — this eliminates x = 0.",
          "Forgetting to write in standard form before factoring."
        ]
      }
    },
    {
      id: "solving-by-square-roots",
      title: "Solving by Square Roots",
      flashcards: [
        {
          front: "When can you solve a quadratic by taking square roots?",
          back: "When the quadratic has NO x term (only x² and a constant). Or when it's written as (something)² = k. Example: x² = 49, or (x-3)² = 16."
        },
        {
          front: "What are the solutions to x² = k?",
          back: "x = ±√k, meaning x = √k or x = -√k. Always include both the positive and negative root. Example: x² = 25 → x = ±5 → x = 5 or x = -5."
        },
        {
          front: "What does ± mean in x = ±√k?",
          back: "± means 'plus or minus' — you have two solutions: x = +√k and x = -√k. Both values squared give k. Example: x = ±3 means x = 3 or x = -3."
        },
        {
          front: "How do you simplify irrational square root solutions?",
          back: "Find the largest perfect square factor and simplify. Example: x² = 75 → x = ±√75 = ±√(25·3) = ±5√3."
        },
        {
          front: "What if x² = negative number?",
          back: "No real solutions exist. The square of any real number is non-negative. Example: x² = -9 has no real solutions (the solutions would be imaginary: x = ±3i)."
        },
        {
          front: "How do you solve (x + a)² = k?",
          back: "Take the square root of both sides: x + a = ±√k, then isolate x: x = -a ± √k. Example: (x-3)² = 16 → x-3 = ±4 → x = 3+4=7 or x = 3-4=-1."
        },
        {
          front: "How do you check solutions when solving by square roots?",
          back: "Substitute each solution back into the original equation. Both x = √k and x = -√k should make it true. Example: x² = 49, x=7: 7²=49 ✓; x=-7: (-7)²=49 ✓."
        }
      ],
      problems: [
        {
          id: "ssr-1",
          type: "fill-in",
          question: "Solve: x² = 49",
          answer: "x = 7 or x = -7",
          explanation: {
            steps: [
              "Take the square root of both sides",
              "x = ±√49 = ±7",
              "Solutions: x = 7 or x = -7",
              "Check: 7² = 49 ✓; (-7)² = 49 ✓"
            ],
            tip: "Always write both + and − solutions."
          }
        },
        {
          id: "ssr-2",
          type: "fill-in",
          question: "Solve and simplify: x² = 75",
          answer: "x = 5√3 or x = -5√3",
          explanation: {
            steps: [
              "Take square root: x = ±√75",
              "Simplify √75: √(25·3) = 5√3",
              "Solutions: x = ±5√3",
              "That is: x = 5√3 or x = -5√3"
            ],
            tip: "Find the largest perfect square factor of 75: that's 25."
          }
        },
        {
          id: "ssr-3",
          type: "fill-in",
          question: "Solve: (x - 3)² = 16",
          answer: "x = 7 or x = -1",
          explanation: {
            steps: [
              "Take square root of both sides: x - 3 = ±√16 = ±4",
              "Case 1: x - 3 = 4 → x = 7",
              "Case 2: x - 3 = -4 → x = -1",
              "Check: (7-3)²=16 ✓; (-1-3)²=(-4)²=16 ✓"
            ],
            tip: "Solve both cases separately: one uses + the other uses −."
          }
        },
        {
          id: "ssr-4",
          type: "fill-in",
          question: "Solve: 2x² = 50",
          answer: "x = 5 or x = -5",
          explanation: {
            steps: [
              "Divide both sides by 2: x² = 25",
              "Take square root: x = ±√25 = ±5",
              "Solutions: x = 5 or x = -5"
            ],
            tip: "Isolate x² first by dividing before taking the square root."
          }
        },
        {
          id: "ssr-5",
          type: "multiple-choice",
          question: "How many real solutions does x² + 16 = 0 have?",
          choices: ["No real solutions", "One real solution: x = 4", "Two real solutions: x = ±4", "Two real solutions: x = ±2"],
          answer: "No real solutions",
          explanation: {
            steps: [
              "Rewrite: x² = -16",
              "The square root of a negative number is not real",
              "No real solutions exist",
              "Note: This means the parabola y = x² + 16 never crosses the x-axis"
            ],
            tip: "If x² equals a negative number, there are no real solutions."
          }
        },
        {
          id: "ssr-6",
          type: "fill-in",
          question: "Solve: (x + 2)² = 9",
          answer: "x = 1 or x = -5",
          explanation: {
            steps: [
              "Take square root: x + 2 = ±3",
              "Case 1: x + 2 = 3 → x = 1",
              "Case 2: x + 2 = -3 → x = -5",
              "Check: (1+2)²=9 ✓; (-5+2)²=(-3)²=9 ✓"
            ],
            tip: "Subtract 2 from both results of the ± step."
          }
        },
        {
          id: "ssr-7",
          type: "fill-in",
          question: "Solve: x² = 48 (simplify the radical)",
          answer: "x = 4√3 or x = -4√3",
          explanation: {
            steps: [
              "x = ±√48",
              "Simplify: √48 = √(16·3) = 4√3",
              "Solutions: x = ±4√3"
            ],
            tip: "Largest perfect square factor of 48 is 16."
          }
        },
        {
          id: "ssr-8",
          type: "fill-in",
          question: "Solve: (x - 5)² = 3",
          answer: "x = 5 + √3 or x = 5 - √3",
          explanation: {
            steps: [
              "Take square root: x - 5 = ±√3",
              "x = 5 ± √3",
              "Solutions: x = 5 + √3 or x = 5 - √3"
            ],
            tip: "√3 cannot be simplified further; leave in exact form."
          }
        },
        {
          id: "ssr-9",
          type: "multiple-choice",
          question: "Solve: 3(x + 1)² = 27",
          choices: ["x = 2 or x = -4", "x = 3 or x = -3", "x = 2 or x = 4", "x = -2 or x = 4"],
          answer: "x = 2 or x = -4",
          explanation: {
            steps: [
              "Divide both sides by 3: (x + 1)² = 9",
              "Take square root: x + 1 = ±3",
              "Case 1: x + 1 = 3 → x = 2",
              "Case 2: x + 1 = -3 → x = -4"
            ],
            tip: "Divide by the coefficient before taking the square root."
          }
        },
        {
          id: "ssr-10",
          type: "fill-in",
          question: "Solve: x² - 18 = 0 (simplify the radical)",
          answer: "x = 3√2 or x = -3√2",
          explanation: {
            steps: [
              "Add 18: x² = 18",
              "x = ±√18",
              "Simplify: √18 = √(9·2) = 3√2",
              "x = ±3√2"
            ],
            tip: "Isolate x² first, then take the square root and simplify."
          }
        }
      ],
      guide: {
        concept: "Use the square root method when x appears only as x² (no x term), or when the equation is in the form (x+a)² = k. Always remember the ± — every positive number has two square roots.",
        examples: [
          {
            problem: "Solve: (x - 2)² = 25",
            steps: ["x - 2 = ±5", "x = 2 + 5 = 7 or x = 2 - 5 = -3"],
            answer: "x = 7 or x = -3"
          },
          {
            problem: "Solve: x² = 12",
            steps: ["x = ±√12 = ±√(4·3) = ±2√3"],
            answer: "x = 2√3 or x = -2√3"
          }
        ],
        tips: [
          "Isolate the squared term before taking the square root.",
          "Never forget the ± when taking a square root to solve.",
          "Simplify radicals by factoring out perfect squares."
        ],
        commonMistakes: [
          "Forgetting the negative solution (only writing x = +√k).",
          "Not simplifying the radical fully.",
          "Taking the square root before isolating x²."
        ]
      }
    },
    {
      id: "completing-the-square",
      title: "Completing the Square",
      flashcards: [
        {
          front: "What is completing the square?",
          back: "A method of rewriting x² + bx by adding (b/2)² to create a perfect square trinomial. x² + bx + (b/2)² = (x + b/2)². Example: x² + 6x + 9 = (x + 3)²."
        },
        {
          front: "What is (b/2)² and why do we add it?",
          back: "Half of b, squared. Adding it to x² + bx creates a perfect square trinomial. Example: x² + 8x → b=8, (b/2)² = 4² = 16 → x² + 8x + 16 = (x + 4)²."
        },
        {
          front: "What are the steps for completing the square to solve x² + bx + c = 0?",
          back: "1) Move constant to right: x² + bx = -c. 2) Add (b/2)² to both sides. 3) Write left as (x + b/2)². 4) Take ±√ of both sides. 5) Solve for x."
        },
        {
          front: "What is vertex form of a quadratic?",
          back: "y = a(x - h)² + k, where (h, k) is the vertex. Converting to this form requires completing the square. Example: y = x² + 4x + 1 → y = (x+2)² - 3, vertex (-2, -3)."
        },
        {
          front: "Why do we complete the square?",
          back: "It converts any quadratic to vertex form (useful for graphing), solves equations that don't factor nicely, and is how the quadratic formula is derived. It's a universal method."
        },
        {
          front: "How does completing the square relate to the quadratic formula?",
          back: "Starting with ax²+bx+c=0, divide by a, complete the square, and simplify — you derive x = (-b ± √(b²-4ac)) / 2a. The quadratic formula IS the completed-square result."
        },
        {
          front: "How do you complete the square when a ≠ 1?",
          back: "Divide the entire equation by a first, then proceed. Example: 2x² + 8x + 6 = 0 → divide by 2: x² + 4x + 3 = 0 → x² + 4x = -3 → add 4: (x+2)² = 1 → x = -1 or x = -3."
        }
      ],
      problems: [
        {
          id: "cts-1",
          type: "fill-in",
          question: "Complete the square: what value should be added to x² + 6x to make a perfect square trinomial?",
          answer: "9",
          explanation: {
            steps: [
              "Use the formula (b/2)²",
              "b = 6, so b/2 = 3",
              "(b/2)² = 3² = 9",
              "x² + 6x + 9 = (x + 3)²"
            ],
            tip: "Take half the coefficient of x, then square it."
          }
        },
        {
          id: "cts-2",
          type: "fill-in",
          question: "Solve by completing the square: x² + 4x - 5 = 0",
          answer: "x = 1 or x = -5",
          explanation: {
            steps: [
              "Move constant: x² + 4x = 5",
              "Add (4/2)² = 4 to both sides: x² + 4x + 4 = 9",
              "(x + 2)² = 9",
              "x + 2 = ±3 → x = 1 or x = -5"
            ],
            tip: "Remember to add the same value to BOTH sides."
          }
        },
        {
          id: "cts-3",
          type: "fill-in",
          question: "Solve by completing the square: x² - 8x + 7 = 0",
          answer: "x = 7 or x = 1",
          explanation: {
            steps: [
              "Move constant: x² - 8x = -7",
              "Add (-8/2)² = 16 to both sides: x² - 8x + 16 = 9",
              "(x - 4)² = 9",
              "x - 4 = ±3 → x = 7 or x = 1"
            ],
            tip: "b/2 = -4, so (b/2)² = 16 — always positive."
          }
        },
        {
          id: "cts-4",
          type: "fill-in",
          question: "Convert to vertex form by completing the square: y = x² + 4x + 1",
          answer: "y = (x + 2)² - 3",
          explanation: {
            steps: [
              "Group x terms: y = (x² + 4x) + 1",
              "(b/2)² = (4/2)² = 4; add and subtract inside: y = (x² + 4x + 4) + 1 - 4",
              "Write as perfect square: y = (x + 2)² - 3",
              "Vertex: (-2, -3)"
            ],
            tip: "Add and subtract the same value to keep the expression equivalent."
          }
        },
        {
          id: "cts-5",
          type: "fill-in",
          question: "Solve by completing the square: x² + 6x + 7 = 0",
          answer: "x = -3 + √2 or x = -3 - √2",
          explanation: {
            steps: [
              "x² + 6x = -7",
              "Add (3)² = 9: x² + 6x + 9 = 2",
              "(x + 3)² = 2",
              "x + 3 = ±√2 → x = -3 ± √2"
            ],
            tip: "Leave irrational solutions in exact radical form."
          }
        },
        {
          id: "cts-6",
          type: "multiple-choice",
          question: "Which is the vertex form of y = x² - 6x + 11?",
          choices: ["y = (x - 3)² + 2", "y = (x + 3)² + 2", "y = (x - 3)² - 2", "y = (x - 6)² + 11"],
          answer: "y = (x - 3)² + 2",
          explanation: {
            steps: [
              "Group: y = (x² - 6x) + 11",
              "(b/2)² = (-6/2)² = 9; y = (x² - 6x + 9) + 11 - 9",
              "y = (x - 3)² + 2",
              "Vertex: (3, 2)"
            ],
            tip: "The vertex is (h, k) where h = -(b/2) and k is the constant remaining."
          }
        },
        {
          id: "cts-7",
          type: "fill-in",
          question: "Solve by completing the square: x² - 4x - 1 = 0",
          answer: "x = 2 + √5 or x = 2 - √5",
          explanation: {
            steps: [
              "x² - 4x = 1",
              "Add (-4/2)² = 4: x² - 4x + 4 = 5",
              "(x - 2)² = 5",
              "x = 2 ± √5"
            ],
            tip: "√5 is irrational and in simplest form — leave it as is."
          }
        },
        {
          id: "cts-8",
          type: "fill-in",
          question: "What value completes the square for x² - 10x?",
          answer: "25",
          explanation: {
            steps: [
              "b = -10; half of b = -5",
              "(b/2)² = (-5)² = 25",
              "x² - 10x + 25 = (x - 5)²"
            ],
            tip: "The value is always positive: squaring any number gives a non-negative result."
          }
        },
        {
          id: "cts-9",
          type: "fill-in",
          question: "Solve by completing the square: 2x² - 4x - 6 = 0",
          answer: "x = 3 or x = -1",
          explanation: {
            steps: [
              "Divide all terms by 2: x² - 2x - 3 = 0",
              "x² - 2x = 3",
              "Add (-2/2)² = 1: x² - 2x + 1 = 4",
              "(x - 1)² = 4 → x - 1 = ±2 → x = 3 or x = -1"
            ],
            tip: "When a ≠ 1, divide through by a first."
          }
        },
        {
          id: "cts-10",
          type: "multiple-choice",
          question: "Solving x² + 2x + 5 = 0 by completing the square gives:",
          choices: ["No real solutions", "x = -1 ± 2i", "x = 1 ± 2", "x = -1 ± √4"],
          answer: "No real solutions",
          explanation: {
            steps: [
              "x² + 2x = -5",
              "Add 1: (x + 1)² = -4",
              "Square root of a negative → no real solutions",
              "(Complex: x = -1 ± 2i, but that's beyond Algebra 1)"
            ],
            tip: "If completing the square gives (expression)² = negative, there are no real solutions."
          }
        }
      ],
      guide: {
        concept: "Completing the square converts any quadratic into a perfect square. It solves any quadratic equation and converts to vertex form for graphing.",
        examples: [
          {
            problem: "Solve: x² + 6x + 5 = 0 by completing the square",
            steps: ["x² + 6x = -5", "Add 9: (x+3)² = 4", "x+3 = ±2 → x = -1 or x = -5"],
            answer: "x = -1 or x = -5"
          },
          {
            problem: "Convert to vertex form: y = x² - 8x + 10",
            steps: ["y = (x²-8x+16)+10-16", "y = (x-4)² - 6", "Vertex: (4,-6)"],
            answer: "y = (x - 4)² - 6"
          }
        ],
        tips: [
          "Always add the same number to BOTH sides of the equation.",
          "Divide by a first when the leading coefficient is not 1.",
          "(b/2)² is always positive — squaring always gives a non-negative result."
        ],
        commonMistakes: [
          "Adding (b/2)² to only one side of the equation.",
          "Using b instead of b/2 when computing the completing value.",
          "Forgetting to divide by a before completing the square."
        ]
      }
    },
    {
      id: "quadratic-formula",
      title: "The Quadratic Formula",
      flashcards: [
        {
          front: "What is the quadratic formula?",
          back: "x = (-b ± √(b² - 4ac)) / (2a). It solves any quadratic equation ax² + bx + c = 0. Example: for x² + 3x - 10 = 0, a=1, b=3, c=-10 → x = (-3 ± √(9+40)) / 2 = (-3 ± 7) / 2."
        },
        {
          front: "How do you identify a, b, and c from a quadratic equation?",
          back: "Write in standard form ax²+bx+c=0. a = coefficient of x², b = coefficient of x, c = constant term. Example: 5x²-3x+2=0 → a=5, b=-3, c=2. Watch signs carefully!"
        },
        {
          front: "What are the steps for using the quadratic formula?",
          back: "1) Write in standard form ax²+bx+c=0. 2) Identify a, b, c. 3) Substitute into x = (-b ± √(b²-4ac))/(2a). 4) Simplify under the radical. 5) Simplify ± results. 6) Reduce fractions."
        },
        {
          front: "When should you use the quadratic formula vs. factoring?",
          back: "Use factoring when the trinomial factors easily over integers. Use the formula when: it doesn't factor easily, when solutions are irrational, or when you're unsure if it factors. The formula always works."
        },
        {
          front: "What does the ± symbol mean in the quadratic formula?",
          back: "It produces TWO solutions: x₁ = (-b + √(b²-4ac))/(2a) and x₂ = (-b - √(b²-4ac))/(2a). You evaluate the formula twice — once with + and once with −."
        },
        {
          front: "What are rational vs. irrational solutions from the quadratic formula?",
          back: "Rational: if b²-4ac is a perfect square (e.g., 0, 1, 4, 9…), solutions are rational. Irrational: if b²-4ac is positive but not a perfect square, solutions involve simplified radicals."
        },
        {
          front: "How do you simplify the quadratic formula result?",
          back: "Evaluate the discriminant (b²-4ac), take its square root (simplify if needed), then compute both +/− values. Reduce the final fraction. Example: x = (4 ± √12)/(2) = (4 ± 2√3)/2 = 2 ± √3."
        }
      ],
      problems: [
        {
          id: "qf-1",
          type: "fill-in",
          question: "Solve using the quadratic formula: x² + 3x - 10 = 0",
          answer: "x = 2 or x = -5",
          explanation: {
            steps: [
              "a=1, b=3, c=-10",
              "Discriminant: b²-4ac = 9-4(1)(-10) = 9+40 = 49",
              "x = (-3 ± √49)/2 = (-3 ± 7)/2",
              "x = (-3+7)/2 = 4/2 = 2 or x = (-3-7)/2 = -10/2 = -5"
            ],
            tip: "A perfect square discriminant always gives rational solutions."
          }
        },
        {
          id: "qf-2",
          type: "fill-in",
          question: "Solve using the quadratic formula: 2x² - 5x + 2 = 0",
          answer: "x = 2 or x = 1/2",
          explanation: {
            steps: [
              "a=2, b=-5, c=2",
              "Discriminant: 25-4(2)(2) = 25-16 = 9",
              "x = (5 ± 3)/4",
              "x = 8/4 = 2 or x = 2/4 = 1/2"
            ],
            tip: "Note: -(-5) = +5 in the numerator."
          }
        },
        {
          id: "qf-3",
          type: "fill-in",
          question: "Solve (leave in simplified radical form): x² - 4x + 1 = 0",
          answer: "x = 2 + √3 or x = 2 - √3",
          explanation: {
            steps: [
              "a=1, b=-4, c=1",
              "Discriminant: 16-4 = 12",
              "x = (4 ± √12)/2 = (4 ± 2√3)/2",
              "x = 2 ± √3"
            ],
            tip: "Simplify the radical first, then divide: √12 = 2√3."
          }
        },
        {
          id: "qf-4",
          type: "fill-in",
          question: "Solve: 3x² + 2x - 1 = 0",
          answer: "x = 1/3 or x = -1",
          explanation: {
            steps: [
              "a=3, b=2, c=-1",
              "Discriminant: 4-4(3)(-1) = 4+12 = 16",
              "x = (-2 ± 4)/6",
              "x = 2/6 = 1/3 or x = -6/6 = -1"
            ],
            tip: "Reduce fractions in the final step."
          }
        },
        {
          id: "qf-5",
          type: "multiple-choice",
          question: "What are a, b, and c for 5x² - 3x + 2 = 0?",
          choices: ["a=5, b=-3, c=2", "a=5, b=3, c=2", "a=5, b=-3, c=-2", "a=-5, b=3, c=-2"],
          answer: "a=5, b=-3, c=2",
          explanation: {
            steps: [
              "Standard form: 5x² - 3x + 2 = 0",
              "a = coefficient of x² = 5",
              "b = coefficient of x = -3 (keep the sign!)",
              "c = constant = 2"
            ],
            tip: "The sign of b and c comes directly from the equation — include negatives."
          }
        },
        {
          id: "qf-6",
          type: "fill-in",
          question: "Solve: x² + x - 6 = 0 (use the formula, verify with factoring)",
          answer: "x = 2 or x = -3",
          explanation: {
            steps: [
              "a=1, b=1, c=-6; discriminant: 1+24 = 25",
              "x = (-1 ± 5)/2",
              "x = 4/2 = 2 or x = -6/2 = -3",
              "Verify by factoring: (x-2)(x+3) = 0 → same answers ✓"
            ],
            tip: "The formula and factoring always give the same result."
          }
        },
        {
          id: "qf-7",
          type: "fill-in",
          question: "Solve: x² - 2x - 4 = 0 (simplify the radical)",
          answer: "x = 1 + √5 or x = 1 - √5",
          explanation: {
            steps: [
              "a=1, b=-2, c=-4; discriminant: 4+16 = 20",
              "x = (2 ± √20)/2 = (2 ± 2√5)/2",
              "x = 1 ± √5"
            ],
            tip: "Simplify √20 = √(4·5) = 2√5, then divide by 2."
          }
        },
        {
          id: "qf-8",
          type: "multiple-choice",
          question: "Which quadratic equation has no real solutions based on the quadratic formula?",
          choices: ["x² + 2x + 5 = 0", "x² - 2x - 5 = 0", "x² + 2x - 5 = 0", "x² - 2x + 1 = 0"],
          answer: "x² + 2x + 5 = 0",
          explanation: {
            steps: [
              "x² + 2x + 5: discriminant = 4 - 20 = -16 < 0 → no real solutions",
              "x² - 2x - 5: discriminant = 4 + 20 = 24 > 0 ✓",
              "x² + 2x - 5: discriminant = 4 + 20 = 24 > 0 ✓",
              "x² - 2x + 1: discriminant = 4 - 4 = 0 (one solution) ✓"
            ],
            tip: "Negative discriminant → no real solutions."
          }
        },
        {
          id: "qf-9",
          type: "fill-in",
          question: "First rewrite in standard form, then solve: 2x² = 3x + 2",
          answer: "x = 2 or x = -1/2",
          explanation: {
            steps: [
              "Standard form: 2x² - 3x - 2 = 0",
              "a=2, b=-3, c=-2; discriminant: 9+16 = 25",
              "x = (3 ± 5)/4",
              "x = 8/4 = 2 or x = -2/4 = -1/2"
            ],
            tip: "Always rearrange to standard form before identifying a, b, c."
          }
        },
        {
          id: "qf-10",
          type: "fill-in",
          question: "Solve: 4x² - 4x - 3 = 0",
          answer: "x = 3/2 or x = -1/2",
          explanation: {
            steps: [
              "a=4, b=-4, c=-3; discriminant: 16+48 = 64",
              "x = (4 ± 8)/8",
              "x = 12/8 = 3/2 or x = -4/8 = -1/2"
            ],
            tip: "A perfect square discriminant (64 = 8²) gives rational solutions."
          }
        }
      ],
      guide: {
        concept: "The quadratic formula x = (-b ± √(b²-4ac))/(2a) solves any quadratic equation. It is derived by completing the square and always works, even when factoring is difficult.",
        examples: [
          {
            problem: "Solve: 2x² + 3x - 2 = 0",
            steps: ["a=2, b=3, c=-2; discriminant = 9+16 = 25", "x = (-3 ± 5)/4", "x = 2/4 = 1/2 or x = -8/4 = -2"],
            answer: "x = 1/2 or x = -2"
          }
        ],
        tips: [
          "Write the equation in standard form first.",
          "Compute the discriminant (b²-4ac) before the full formula.",
          "Simplify the radical before dividing by 2a.",
          "Reduce fractions at the end."
        ],
        commonMistakes: [
          "Losing the negative sign: -b when b is negative gives a positive.",
          "Dividing only part of the numerator by 2a — divide the entire numerator.",
          "Not simplifying the radical under the square root."
        ]
      }
    },
    {
      id: "discriminant",
      title: "The Discriminant",
      flashcards: [
        {
          front: "What is the discriminant?",
          back: "The discriminant is b² - 4ac, the expression under the radical in the quadratic formula. It determines how many real solutions the equation ax²+bx+c=0 has without fully solving it."
        },
        {
          front: "What does discriminant > 0 mean?",
          back: "Two distinct real solutions. The parabola crosses the x-axis twice. If b²-4ac is also a perfect square, the solutions are rational (and factorable). Example: x²-5x+4=0: 25-16=9>0 → two solutions."
        },
        {
          front: "What does discriminant = 0 mean?",
          back: "Exactly one real solution (a double root). The parabola is tangent to (just touches) the x-axis. x = -b/(2a). Example: x²-6x+9=0: 36-36=0 → one solution x=3."
        },
        {
          front: "What does discriminant < 0 mean?",
          back: "No real solutions. The parabola doesn't cross the x-axis at all (entirely above or below). Example: x²+2x+5=0: 4-20=-16<0 → no real solutions."
        },
        {
          front: "How is the discriminant connected to the graph of y = ax²+bx+c?",
          back: "Discriminant > 0: two x-intercepts. Discriminant = 0: one x-intercept (vertex on x-axis). Discriminant < 0: no x-intercepts (graph doesn't touch x-axis)."
        },
        {
          front: "When does the discriminant guarantee rational solutions?",
          back: "When the discriminant is a perfect square (0, 1, 4, 9, 16, 25…), the solutions are rational numbers. When it's positive but not a perfect square, solutions are irrational (involve radicals)."
        },
        {
          front: "What is the discriminant formula and where does it come from?",
          back: "b²-4ac. It comes from the quadratic formula — it's the expression inside the √ symbol. The sign of this expression determines whether the √ is real (positive/zero) or imaginary (negative)."
        }
      ],
      problems: [
        {
          id: "disc-1",
          type: "fill-in",
          question: "Find the discriminant of: x² - 5x + 4 = 0",
          answer: "9",
          explanation: {
            steps: [
              "a=1, b=-5, c=4",
              "Discriminant = b² - 4ac = (-5)² - 4(1)(4)",
              "= 25 - 16 = 9",
              "Since 9 > 0 and is a perfect square → two rational solutions"
            ],
            tip: "The discriminant just requires substituting a, b, c into b²-4ac."
          }
        },
        {
          id: "disc-2",
          type: "multiple-choice",
          question: "How many real solutions does 4x² - 4x + 1 = 0 have?",
          choices: ["One real solution (double root)", "Two real solutions", "No real solutions", "Cannot determine"],
          answer: "One real solution (double root)",
          explanation: {
            steps: [
              "a=4, b=-4, c=1",
              "Discriminant: (-4)² - 4(4)(1) = 16 - 16 = 0",
              "Discriminant = 0 → exactly one real solution (double root)",
              "x = -b/(2a) = 4/8 = 1/2"
            ],
            tip: "Discriminant = 0 means the parabola is tangent to the x-axis."
          }
        },
        {
          id: "disc-3",
          type: "multiple-choice",
          question: "Does x² + 2x + 5 = 0 have real solutions?",
          choices: ["No — discriminant is negative", "Yes — two irrational solutions", "Yes — two rational solutions", "Yes — one rational solution"],
          answer: "No — discriminant is negative",
          explanation: {
            steps: [
              "a=1, b=2, c=5",
              "Discriminant: 4 - 20 = -16",
              "-16 < 0 → no real solutions",
              "The parabola y = x²+2x+5 has its vertex above the x-axis and never crosses it"
            ],
            tip: "Negative discriminant → no x-intercepts on the graph."
          }
        },
        {
          id: "disc-4",
          type: "fill-in",
          question: "For what value of k does x² + kx + 4 = 0 have exactly one real solution?",
          answer: "k = 4 or k = -4",
          explanation: {
            steps: [
              "For one solution, discriminant = 0",
              "b² - 4ac = 0 → k² - 4(1)(4) = 0",
              "k² - 16 = 0 → k² = 16",
              "k = ±4"
            ],
            tip: "Set the discriminant equal to zero and solve for the unknown."
          }
        },
        {
          id: "disc-5",
          type: "fill-in",
          question: "Find the discriminant and state the number of solutions: 2x² + x - 3 = 0",
          answer: "Discriminant = 25; two real rational solutions",
          explanation: {
            steps: [
              "a=2, b=1, c=-3",
              "Discriminant = 1 - 4(2)(-3) = 1 + 24 = 25",
              "25 > 0 and is a perfect square → two rational solutions",
              "Solve: x = (-1±5)/4 → x=1 or x=-3/2"
            ],
            tip: "Perfect square discriminant guarantees rational solutions."
          }
        },
        {
          id: "disc-6",
          type: "multiple-choice",
          question: "The discriminant of a quadratic is 7. What does this tell you?",
          choices: ["Two irrational real solutions", "Two rational real solutions", "One real solution", "No real solutions"],
          answer: "Two irrational real solutions",
          explanation: {
            steps: [
              "Discriminant = 7 > 0 → two real solutions",
              "7 is NOT a perfect square → solutions involve √7",
              "Solutions are irrational",
              "Example: x = (-b ± √7)/(2a)"
            ],
            tip: "Positive but non-perfect-square discriminant → irrational solutions."
          }
        },
        {
          id: "disc-7",
          type: "fill-in",
          question: "Find the discriminant: 3x² - 6x + 3 = 0",
          answer: "0",
          explanation: {
            steps: [
              "a=3, b=-6, c=3",
              "Discriminant = 36 - 4(3)(3) = 36 - 36 = 0",
              "One double root: x = 6/6 = 1",
              "Verify: 3x²-6x+3 = 3(x-1)² ✓"
            ],
            tip: "When the discriminant is 0, the trinomial is a perfect square."
          }
        },
        {
          id: "disc-8",
          type: "multiple-choice",
          question: "A parabola has vertex below the x-axis and opens upward. How many x-intercepts does it have?",
          choices: ["Two x-intercepts (discriminant > 0)", "One x-intercept (discriminant = 0)", "No x-intercepts (discriminant < 0)", "Impossible to determine"],
          answer: "Two x-intercepts (discriminant > 0)",
          explanation: {
            steps: [
              "Opens upward (a > 0) and vertex is below x-axis",
              "The parabola must cross the x-axis on both sides of the vertex",
              "Two x-intercepts → discriminant > 0",
              "This matches: positive leading coefficient, vertex with negative y-value"
            ],
            tip: "Visualize the parabola to connect the graph to the discriminant."
          }
        },
        {
          id: "disc-9",
          type: "fill-in",
          question: "Without solving, determine the number of real solutions: x² - 6x + 10 = 0",
          answer: "No real solutions",
          explanation: {
            steps: [
              "a=1, b=-6, c=10",
              "Discriminant = 36 - 40 = -4",
              "-4 < 0 → no real solutions"
            ],
            tip: "The discriminant is fast — compute it to categorize without fully solving."
          }
        },
        {
          id: "disc-10",
          type: "multiple-choice",
          question: "For what values of c does x² - 4x + c = 0 have two real solutions?",
          choices: ["c < 4", "c > 4", "c = 4", "c ≤ 4"],
          answer: "c < 4",
          explanation: {
            steps: [
              "For two real solutions, discriminant > 0",
              "(-4)² - 4(1)(c) > 0 → 16 - 4c > 0",
              "16 > 4c → c < 4",
              "So any c less than 4 gives two real solutions"
            ],
            tip: "Set up the inequality discriminant > 0 and solve for the parameter."
          }
        }
      ],
      guide: {
        concept: "The discriminant b²-4ac tells you how many real solutions a quadratic has before you fully solve it. It's the key to quickly analyzing quadratic equations and their graphs.",
        examples: [
          {
            problem: "Analyze: 2x² - 3x + 5 = 0",
            steps: ["Discriminant = 9 - 40 = -31", "-31 < 0 → no real solutions", "Parabola never crosses x-axis"],
            answer: "No real solutions"
          },
          {
            problem: "Analyze: x² - 4x + 4 = 0",
            steps: ["Discriminant = 16 - 16 = 0", "0 → one double root", "x = 4/2 = 2"],
            answer: "One solution: x = 2"
          }
        ],
        tips: [
          "Just evaluate b²-4ac — it's one computation that tells you everything about solution count.",
          "Perfect square discriminant → rational solutions (factors nicely).",
          "Negative discriminant → no real solutions (graph has no x-intercepts)."
        ],
        commonMistakes: [
          "Forgetting to square b — it's b², always positive.",
          "Computing 4ac incorrectly when a or c is negative.",
          "Confusing 'no real solutions' with 'no solutions' — there are complex solutions, just not real ones."
        ]
      }
    }
  ]
};
